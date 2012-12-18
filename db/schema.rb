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

ActiveRecord::Schema.define(:version => 20121218040523) do

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
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "account_type"
    t.string   "account_period"
    t.string   "account_payment"
    t.text     "agency_about"
    t.string   "insc_state"
    t.string   "insc_city"
    t.string   "fancy_name"
    t.string   "social_name"
    t.string   "phone"
    t.string   "fax"
    t.string   "cep"
    t.string   "address"
    t.string   "address_number"
    t.string   "neighborhood"
    t.string   "complement"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  add_index "agencies", ["confirmation_token"], :name => "index_agencies_on_confirmation_token", :unique => true
  add_index "agencies", ["email"], :name => "index_agencies_on_email", :unique => true
  add_index "agencies", ["reset_password_token"], :name => "index_agencies_on_reset_password_token", :unique => true

  create_table "castings", :force => true do |t|
    t.string   "name"
    t.integer  "agency_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "composites", :force => true do |t|
    t.integer  "model_id"
    t.integer  "main_photo_id"
    t.integer  "first_sub_photo_id"
    t.integer  "second_sub_photo_id"
    t.integer  "third_sub_photo_id"
    t.integer  "fourth_sub_photo_id"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "customers", :force => true do |t|
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
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "customers", ["email"], :name => "index_customers_on_email", :unique => true
  add_index "customers", ["reset_password_token"], :name => "index_customers_on_reset_password_token", :unique => true

  create_table "model_castings", :force => true do |t|
    t.integer  "model_id"
    t.integer  "casting_id"
    t.integer  "score"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

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
    t.integer  "mannequin"
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

  create_table "testimonials", :force => true do |t|
    t.string   "from",       :limit => 60,  :null => false
    t.string   "title",      :limit => 140, :null => false
    t.text     "body",                      :null => false
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "websites", :force => true do |t|
    t.string   "subdomain"
    t.string   "visualization_mode"
    t.string   "theme",                              :default => "subdomain_default"
    t.text     "footer"
    t.boolean  "footer_navigation_itens"
    t.string   "logo_file_name"
    t.string   "logo_content_type"
    t.integer  "logo_file_size"
    t.datetime "logo_updated_at"
    t.string   "body_background_image_file_name"
    t.string   "body_background_image_content_type"
    t.integer  "body_background_image_file_size"
    t.datetime "body_background_image_updated_at"
    t.string   "body_background_color"
    t.string   "body_font_family"
    t.string   "body_font_size"
    t.string   "body_font_color"
    t.string   "header_background_color"
    t.string   "header_font_family"
    t.string   "header_font_size"
    t.string   "header_font_color"
    t.string   "navigation_background_color"
    t.string   "navigation_font_family"
    t.string   "navigation_font_size"
    t.string   "navigation_font_color"
    t.string   "content_background_color"
    t.string   "content_font_family"
    t.string   "content_font_size"
    t.string   "content_font_color"
    t.string   "footer_background_color"
    t.string   "footer_font_family"
    t.string   "footer_font_size"
    t.string   "footer_font_color"
    t.boolean  "home",                               :default => true
    t.boolean  "models",                             :default => true
    t.boolean  "castings",                           :default => true
    t.boolean  "about",                              :default => true
    t.boolean  "contact_us",                         :default => true
    t.boolean  "create_account",                     :default => true
    t.boolean  "my_site",                            :default => true
    t.boolean  "be_a_model",                         :default => true
    t.integer  "agency_id"
    t.datetime "created_at",                                                          :null => false
    t.datetime "updated_at",                                                          :null => false
    t.string   "logo_url"
  end

end
