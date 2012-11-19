module CastingsHelper

  def casting_order_columns
    columns = []
    columns << ['Data', :created_at]
    columns << ['A -> Z', :name]
    columns << ['Z -> A', :name]

    columns
  end

  def model_casting_order_columns
    columns = []
    columns << [ModelCasting.human_attribute_name(:score), :score]
    columns << [Model.human_attribute_name(:birthday), :birthday]
    columns << [Model.human_attribute_name(:biotype), :biotype]
    columns << [Model.human_attribute_name(:eyes_color), :eyes_color]
    columns << [Model.human_attribute_name(:hair_color), :hair_color]

    columns


  end

end
