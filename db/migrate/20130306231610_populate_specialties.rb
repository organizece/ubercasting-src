class PopulateSpecialties < ActiveRecord::Migration
  def up
    Specialty.new(name: :moda_passarela).save!
    Specialty.new(name: :moda_editorial).save!
    Specialty.new(name: :eventos).save!
    Specialty.new(name: :publicidade).save!
    Specialty.new(name: :atuacao).save!
  end

  def down
    Specialty.all.each do |s|
      s.destroy!
    end
  end
end
