module CastingsHelper

  def casting_order_columns
    columns = []
    columns << ['Data', 'created_at;asc']
    columns << ['A -> Z', 'name;asc']
    columns << ['Z -> A', 'name;desc']

    columns
  end

  def model_casting_order_columns
    columns = []
    columns << [ModelCasting.human_attribute_name(:score), 'score;desc']
    columns << [Model.human_attribute_name(:birthday), 'birthday;asc']
    columns << [Model.human_attribute_name(:biotype), 'biotype;asc']
    columns << [Model.human_attribute_name(:eyes_color), 'eyes_color;asc']
    columns << [Model.human_attribute_name(:hair_color), 'hair_color;asc']

    columns
  end

end
