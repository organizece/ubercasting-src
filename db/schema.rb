# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121015012745) do

  create_table "agencies", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "name"
    t.string   "cnpj"
    t.string   "owner_name"
    t.string   "owner_cpf"
    t.string   "domain"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "agencies", ["confirmation_token"], :name => "index_agencies_on_confirmation_token", :unique => true
  add_index "agencies", ["email"], :name => "index_agencies_on_email", :unique => true
  add_index "agencies", ["reset_password_token"], :name => "index_agencies_on_reset_password_token", :unique => true

  create_table "models", :force => true do |t|
    t.string   "name"
    t.date     "birthday"
    t.string   "gender"
    t.string   "biotype"
    t.string   "responsible_name"
    t.string   "responsible_cpf"
    t.string   "responsible_rg"
    t.decimal  "height"
    t.string   "eyes_color"
    t.string   "hair_color"
    t.decimal  "bust"
    t.decimal  "waist"
    t.decimal  "hip"
    t.integer  "shoes_size"
    t.string   "rg"
    t.string   "cpf"
    t.string   "personal_phone"
    t.string   "secondary_phone"
    t.string   "job_phone"
    t.string   "address"
    t.string   "address_number"
    t.string   "neighborhood"
    t.string   "complement"
    t.string   "cep"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.string   "bank"
    t.string   "bank_account"
    t.string   "bank_account_type"
    t.string   "bank_agency"
    t.string   "personal_email"
    t.string   "job_email"
    t.string   "secondary_email"
    t.string   "site_url"
    t.integer  "agency_id"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
    t.integer  "avatar_photo_id"
    t.string   "specialty"
    t.decimal  "weight"
    t.date     "responsible_birthday"
    t.text     "curriculum"
  end

  create_table "photos", :force => true do |t|
    t.integer  "model_id"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

end
