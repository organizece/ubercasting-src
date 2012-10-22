module ModelsHelper

  def ethnicities
    ethnicities = []
    Model::ETHNICITIES.each { |ethnicity|
        ethnicities << [t(ethnicity, scope: :ethnicities), ethnicity]
    }
    
    ethnicities
  end

  def biotypes
    biotypes = []
    Model::BIOTYPES.each { |biotype|
        biotypes << [t(biotype, scope: :biotypes), biotype]
    }

    biotypes
  end

  def genders
    genders = []
    Model::GENDERS.each { |gender|
        genders << [t(gender, scope: :genders), gender]
    }

    genders
  end

  def ages_from
    ages = []
    ages << ['- 5', 0]
    (5..50).each do |age|
      ages << [age, age]
    end
    ages << ['50 +', 51]
    ages
  end

  def ages_to
    ages = []
    ages << ['- 5', 4]
    (5..50).each do |age|
      ages << [age, age]
    end
    ages << ['50 +', '']
    ages
  end

  def eyes_color
    eyes_color = []
    Model::EYES_COLOR.each { |color|
        eyes_color << [t(color, scope: :eyes_color), color]
    }

    eyes_color
  end

  def hair_color
    hair_color = []
    Model::HAIR_COLOR.each { |color|
        hair_color << [t(color, scope: :hair_color), color]
    }

    hair_color
  end

  def specialties
    specialties = []
    Model::SPECIALTIES.each { |specialty|
        specialties << [t(specialty, scope: :specialties), specialty]
    }

    specialties
  end

  def weights_from
    weights = []
    weights << ['- 30Kg', 0]
    (30..80).each do |weight|
      weights << ["#{weight}Kg", weight]
    end
    weights << ['80Kg +', 81]
    weights
  end

  def weights_to
    weights = []
    weights << ['- 30Kg', 29]
    (30..80).each do |weight|
      weights << ["#{weight}Kg", weight]
    end
    weights << ['80Kg +', '']
    weights
  end

  def busts_from
    busts = []
    busts << ['- 25cm', 0]
    (25..70).each do |bust|
      busts << ["#{bust}cm", bust]
    end
    busts << ['70cm +', 71]
    busts
  end

  def busts_to
    busts = []
    busts << ['- 25cm', 24]
    (25..70).each do |bust|
      busts << ["#{bust}cm", bust]
    end
    busts << ['70cm +', '']
    busts
  end

  def waists_from
    waists = []
    waists << ['- 25cm', 0]
    (25..70).each do |waist|
      waists << ["#{waist}cm", waist]
    end
    waists << ['70cm +', 71]
    waists
  end

  def waists_to
    waists = []
    waists << ['- 25cm', 24]
    (25..70).each do |waist|
      waists << ["#{waist}cm", waist]
    end
    waists << ['70cm +', '']
    waists
  end

  def hips_from
    hips = []
    hips << ['- 25cm', 0]
    (25..70).each do |hip|
      hips << ["#{hip}cm", hip]
    end
    hips << ['70cm +', 71]
    hips
  end

  def hips_to
    hips = []
    hips << ['- 25cm', 24]
    (25..70).each do |hip|
      hips << ["#{hip}cm", hip]
    end
    hips << ['70cm +', '']
    hips
  end

  def shoes_size
    shoes_size = []
    (20..50).each do |size|
      shoes_size << [size, size]
    end

    shoes_size
  end

  def order_columns
    columns = []
    columns << [Model.human_attribute_name(:age), :age]
    columns << [Model.human_attribute_name(:biotype), :biotype]
    columns << [Model.human_attribute_name(:eyes_color), :eyes_color]
    columns << [Model.human_attribute_name(:hair_color), :hair_color]
    columns << [Model.human_attribute_name(:specialty), :specialty]

    columns
  end

  def scores
    scores = []
    (0..5).each do |score|
      scores << [score, score]
    end

    scores
  end
end
