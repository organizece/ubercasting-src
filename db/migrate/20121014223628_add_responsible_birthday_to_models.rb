class AddResponsibleBirthdayToModels < ActiveRecord::Migration
  def change
    add_column :models, :responsible_birthday, :date
  end
end
