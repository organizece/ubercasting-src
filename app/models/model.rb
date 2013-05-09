class Model < ActiveRecord::Base

  BIOTYPES = %w( branco 
                 mulato 
                 negro 
                 mestico 
                 latino 
                 moreno
                 oriental )

  GENDERS = %w( male
                female )

  EYES_COLOR = %w( azul 
                   verde
                   castanho_claro 
                   castanho_escuro )
  
  HAIR_COLOR = %w( branco 
                   castanho_claro 
                   castanho_escuro 
                   preto 
                   loiro 
                   ruivo )

  SPECIALTIES = %w( moda_passarela 
                    moda_editorial 
                    eventos 
                    publicidade 
                    atuacao )

  belongs_to :agency
  has_many :photos, dependent: :destroy
  has_one :composite, dependent: :destroy
  has_many :model_castings, dependent: :destroy
  has_many :castings, through: :model_castings
  has_and_belongs_to_many :specialties

  attr_accessible :name, :birthday, :age, :gender, :biotype, :responsible_name, :responsible_birthday, :responsible_cpf, :responsible_rg,
    :height, :weight, :eyes_color, :hair_color, :bust, :waist, :hip, :mannequin, :shoes_size, :rg, :cpf, :personal_phone, :secondary_phone, 
    :curriculum, :job_phone, :specialty, :address, :address_number, :neighborhood, :complement, :cep, :city, :state, :country, :bank, 
    :bank_account, :bank_account_type, :bank_agency, :personal_email, :job_email, :secondary_email, :site_url,
    :specialty_ids, :video, :art_name, :avatar_photo_id

  has_attached_file :avatar, :styles => { :crop => "500x500>" }#, :processors => [:cropper]

  attr_writer :current_step
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h, :avatar_file_name

  after_update :reprocess_avatar, :if => :cropping?

  # before_validation :download_remote_image, :if => :image_url_provided?

  validates :name, presence: true, if: :basic_info_step?
  validates :birthday, presence: true, if: :basic_info_step?
  validates :gender, presence: true, if: :basic_info_step?
  validates :art_name, presence: true, if: :basic_info_step?
  validates :biotype, presence: true, if: :basic_info_step?
  validates :personal_phone, presence: true, if: :basic_info_step?
  validates :personal_email, presence: true, if: :basic_info_step?
  
  validates :responsible_name, presence: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }
  validates :responsible_birthday, presence: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }
  validates :responsible_cpf, presence: true, cpf: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }

  validates :height, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :weight, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :bust, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :waist, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :hip, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :mannequin, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :shoes_size, numericality: true, allow_nil: true, if: :attr_specs_step?

  def minor_aged?
    major_age = Date.today >> (-1 * 18 * 12) #Cria data 18 anos atrás. Método >> adiciona n meses a data.

    (birthday <=> major_age) == 1
  end

  # def avatar
  #   self.photos.find_by_id(avatar_photo_id)
  # end

  def self.search(criteria)
    models = Model.where(agency_id: criteria.agency_id)
    models = models.where("gender = ?", "#{criteria.gender}") if criteria.gender.present?
    if criteria.age_to.present?
      age_to = Time.local(Date.today.year).to_date >> (-1 * Integer(criteria.age_to) * 12)
      models = models.where("birthday >= ?", "#{age_to}")
    end
    if criteria.age_from.present?
      age_from = Date.today >> (-1 * Integer(criteria.age_from) * 12)
      models = models.where("birthday <= ?", "#{age_from}")
    end
    models = models.where(biotype: criteria.biotype) if criteria.biotype.present? && criteria.biotype[0] != ''
    models = models.where(eyes_color: criteria.eyes_color) if criteria.eyes_color.present? && criteria.eyes_color[0] != ''
    models = models.where(hair_color: criteria.hair_color) if criteria.hair_color.present? && criteria.hair_color[0] != ''
    if criteria.specialty.present? && criteria.specialty[0] != ''
      models = models.joins(:specialties)
      # .uniq -> To bring only one row with the same model has many specialties
      models = models.where('specialties.id' => criteria.specialty).uniq 
    end
    models = models.where("weight >= ?", "#{criteria.weight_from}") if criteria.weight_from.present?
    models = models.where("weight <= ?", "#{criteria.weight_to}") if criteria.weight_to.present?
    models = models.where("bust >= ?", "#{criteria.bust_from}") if criteria.bust_from.present?
    models = models.where("bust <= ?", "#{criteria.bust_to}") if criteria.bust_to.present?
    models = models.where("waist >= ?", "#{criteria.waist_from}") if criteria.waist_from.present?
    models = models.where("waist <= ?", "#{criteria.waist_to}") if criteria.waist_to.present?
    models = models.where("hip >= ?", "#{criteria.hip_from}") if criteria.hip_from.present?
    models = models.where("hip <= ?", "#{criteria.hip_to}") if criteria.hip_to.present?
    models = models.where("mannequin >= ?", "#{criteria.mannequin_from}") if criteria.mannequin_from.present?
    models = models.where("mannequin <= ?", "#{criteria.mannequin_to}") if criteria.mannequin_to.present?
    models = models.where("shoes_size >= ?", "#{criteria.shoes_size_from}") if criteria.shoes_size_from.present?
    models = models.where("shoes_size <= ?", "#{criteria.shoes_size_to}") if criteria.shoes_size_to.present?

    models
  end

  def current_step
    @current_step || steps.first
  end

  def steps
    %w(basic_info attr_specs general_info)
  end

  def next_step
    self.current_step = steps[steps.index(current_step) + 1]
  end

  def previous_step
    self.current_step = steps[steps.index(current_step) - 1]
  end

  def first_step?
    current_step == steps.first
  end

  def last_step?
    current_step == steps.last
  end

  def all_valid?
    steps.all? do |step|
      self.current_step = step
      valid?
    end
  end

  def basic_info_step?
    lambda { |o| o.current_step == "basic_info" }
  end

  def attr_specs_step?
    lambda { |o| o.current_step == "attr_specs" }
  end

  def general_info_step?
    lambda { |o| o.current_step == "general_info" }
  end

  def create_limit_reached?
    limit = agency.subscription.model_limit
    current_models_number = agency.models.count

    # Validates if the creation limit hasn't been reached. Unlimited(-1)
    limit != -1 && limit == current_models_number
  end

  def avatar_from_url(url)
    self.avatar = URI.parse(url)
  end

  def cropping?
    !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end

private

  def reprocess_avatar
    #avatar.reprocess!
  end  

  # def image_url_provided?
  #   !self.avatar_url.blank?
  # end

  # def download_remote_image
  #   self.avatar = do_download_remote_image
  # end
  
  # def do_download_remote_image
  #   io = open(URI.parse(avatar_url))
  #   def io.original_filename; base_uri.path.split('/').last; end
  #   io.original_filename.blank? ? nil : io
  #   rescue # catch url errors with validations instead of exceptions (Errno::ENOENT, OpenURI::HTTPError, etc...)
  # end  

end
