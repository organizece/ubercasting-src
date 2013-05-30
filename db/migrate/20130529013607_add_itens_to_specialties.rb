class AddItensToSpecialties < ActiveRecord::Migration
  def up
    Specialty.new(name: :promotor).save!
    Specialty.new(name: :mao_pe).save!
    Specialty.new(name: :figurante).save!
  end

  def down
    Specialty.last.destroy
    Specialty.last.destroy
    Specialty.last.destroy
  end
end
