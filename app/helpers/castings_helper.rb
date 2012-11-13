module CastingsHelper

  def casting_order_columns
    columns = []
    columns << ['Data', :created_at]
    columns << ['A -> Z', :name]
    columns << ['Z -> A', :name]

    columns
  end

end
