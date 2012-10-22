class ModelSearchCriteria
  attr_accessor :gender, :age_from, :age_to, :biotype, :eyes_color, :hair_color, :specialty,
    :weight_from, :weight_to, :bust_from, :bust_to, :waist_from, :waist_to, :hip_from, :hip_to, :agency_id

  def self.build_criteria(params, current_agency)
    criteria = ModelSearchCriteria.new
    criteria.agency_id = current_agency.id
    criteria.gender = params[:gender]
    criteria.age_from = params[:age_from]
    criteria.age_to = params[:age_to]
    criteria.biotype = params[:biotype]
    criteria.eyes_color = params[:eyes_color]
    criteria.hair_color = params[:hair_color]
    criteria.weight_from = params[:weight_from]
    criteria.weight_to = params[:weight_to]
    criteria.bust_from = params[:bust_from]
    criteria.bust_to = params[:bust_to]
    criteria.waist_from = params[:waist_from]
    criteria.waist_to = params[:waist_to]
    criteria.hip_from = params[:hip_from]
    criteria.hip_to = params[:hip_to]

    criteria
  end

end