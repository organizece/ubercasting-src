class AddCurriculumToModels < ActiveRecord::Migration
  def change
    add_column :models, :curriculum, :text
  end
end
