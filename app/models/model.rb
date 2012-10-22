class Model < ActiveRecord::Base

  BIOTYPES = %w( branco 
                 mulato 
                 negro 
                 mestico 
                 latino 
                 oriental )

  GENDERS = %w( male
                female )

  EYES_COLOR = %w( azul_claro
                   azul_escuro 
                   castanho_claro 
                   castanho_escuro 
                   verde_claro 
                   verde_escuro )
  
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

  attr_accessible :name, :birthday, :age, :gender, :biotype, :responsible_name, :responsible_birthday, :responsible_cpf, :responsible_rg,
    :height, :weight, :eyes_color, :hair_color, :bust, :waist, :hip, :shoes_size, :rg, :cpf, :personal_phone, :secondary_phone, :curriculum,
    :job_phone, :specialty, :address, :address_number, :neighborhood, :complement, :cep, :city, :state, :country, :bank, 
    :bank_account, :bank_account_type, :bank_agency, :personal_email, :job_email, :secondary_email, :site_url, :avatar_photo_id

  attr_writer :current_step

  validates :name, presence: true, if: :basic_info_step?
  validates :birthday, presence: true, if: :basic_info_step?
  validates :gender, presence: true, if: :basic_info_step?
  validates :biotype, presence: true, if: :basic_info_step?
  validates :personal_phone, presence: true, if: :basic_info_step?
  validates :personal_email, presence: true, if: :basic_info_step?
  validates :cep, presence: true, if: :basic_info_step?
  validates :address, presence: true, if: :basic_info_step?
  validates :address_number, presence: true, if: :basic_info_step?
  validates :neighborhood, presence: true, if: :basic_info_step?
  validates :city, presence: true, if: :basic_info_step?
  validates :state, presence: true, if: :basic_info_step?
  validates :country, presence: true, if: :basic_info_step?
  
  validates :responsible_name, presence: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }
  validates :responsible_birthday, presence: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }
  validates :responsible_cpf, presence: true, cpf: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }
  validates :responsible_rg, presence: true, if: lambda { |o| o.minor_aged? && o.basic_info_step? }

  validates :height, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :weight, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :bust, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :waist, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :hip, numericality: true, allow_nil: true, if: :attr_specs_step?
  validates :shoes_size, numericality: true, allow_nil: true, if: :attr_specs_step?

  def minor_aged?
    false
  end

  def avatar
    self.photos.find_by_id(avatar_photo_id)
  end

  def self.search(criteria)
    models = Model.where(agency_id: criteria.agency_id)
    models = models.where("gender = ?", "#{criteria.gender}") if criteria.gender.present?

    # models = models.where("age >= ?", "#{criteria.age_from}") if criteria.age_from.present?
    # models = models.where("age <= ?", "#{criteria.age_to}") if criteria.age_to.present?

    models = models.where("biotype = ?", "#{criteria.biotype}") if criteria.biotype.present?
    models = models.where("eyes_color = ?", "#{criteria.eyes_color}") if criteria.eyes_color.present?
    models = models.where("hair_color = ?", "#{criteria.hair_color}") if criteria.hair_color.present?
    models = models.where("specialty like ?", "%#{criteria.specialty}%") if criteria.specialty.present?
    models = models.where("weight >= ?", "#{criteria.weight_from}") if criteria.weight_from.present?
    models = models.where("weight <= ?", "#{criteria.weight_to}") if criteria.weight_to.present?
    models = models.where("bust >= ?", "#{criteria.bust_from}") if criteria.bust_from.present?
    models = models.where("bust <= ?", "#{criteria.bust_to}") if criteria.bust_to.present?
    models = models.where("waist >= ?", "#{criteria.waist_from}") if criteria.waist_from.present?
    models = models.where("waist <= ?", "#{criteria.waist_to}") if criteria.waist_to.present?
    models = models.where("hip >= ?", "#{criteria.hip_from}") if criteria.hip_from.present?
    models = models.where("hip <= ?", "#{criteria.hip_to}") if criteria.hip_to.present?

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

end
