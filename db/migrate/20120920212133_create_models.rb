class CreateModels < ActiveRecord::Migration
  def change
    create_table :models do |t|
      t.string :name
      t.date :birthday
      t.integer :age
      t.string :gender
      t.string :ethnicity
      t.string :biotype

      t.string :responsible
      t.string :responsible_cpf
      t.string :responsible_rg

      t.decimal :height
      t.string :eyes_color
      t.string :hair_color
      t.decimal :bust
      t.decimal :waist
      t.decimal :hip
      t.integer :shoes

      t.string :sector
      t.string :job
      t.string :rg
      t.string :cpf
      t.string :cel_phone
      t.string :home_phone
      t.string :job_phone

      t.string :address
      t.string :address_number
      t.string :neighborhood
      t.string :complement
      t.string :cep
      t.string :city
      t.string :state
      t.string :country

      t.string :bank
      t.string :bank_account
      t.string :bank_account_type
      t.string :bank_agency
      
      t.string :personal_email
      t.string :job_email
      t.string :other_email
      t.string :site_url

      t.integer :score

      t.integer :agency_id

      t.timestamps
    end
  end
end
