class CreateModelsSpecialties < ActiveRecord::Migration
  def change
    create_table :models_specialties do |t|
      t.integer :model_id
      t.integer :specialty_id
    end
  end
end
