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

ActiveRecord::Schema.define(:version => 20130531144111) do

  create_table "active_admin_comments", :force => true do |t|
    t.string   "resource_id",   :null => false
    t.string   "resource_type", :null => false
    t.integer  "author_id"
    t.string   "author_type"
    t.text     "body"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "namespace"
  end

  add_index "active_admin_comments", ["author_type", "author_id"], :name => "index_active_admin_comments_on_author_type_and_author_id"
  add_index "active_admin_comments", ["namespace"], :name => "index_active_admin_comments_on_namespace"
  add_index "active_admin_comments", ["resource_type", "resource_id"], :name => "index_admin_notes_on_resource_type_and_resource_id"

  create_table "admin_users", :force => true do |t|
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

  add_index "admin_users", ["email"], :name => "index_admin_users_on_email", :unique => true
  add_index "admin_users", ["reset_password_token"], :name => "index_admin_users_on_reset_password_token", :unique => true

  create_table "agencies", :force => true do |t|
    t.string   "email",                          :default => "", :null => false
    t.string   "encrypted_password",             :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                  :default => 0
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
    t.datetime "created_at",                                     :null => false
    t.datetime "updated_at",                                     :null => false
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
    t.integer  "subscription_id"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "paypal_customer_token"
    t.string   "paypal_recurring_profile_token"
  end

  add_index "agencies", ["confirmation_token"], :name => "index_agencies_on_confirmation_token", :unique => true
  add_index "agencies", ["email"], :name => "index_agencies_on_email", :unique => true
  add_index "agencies", ["reset_password_token"], :name => "index_agencies_on_reset_password_token", :unique => true

  create_table "agency_customer_requests", :force => true do |t|
    t.integer  "agency_id"
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.string   "company"
    t.text     "message"
    t.boolean  "new_request", :default => true
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  create_table "agency_customers", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "cnpj"
    t.string   "state_registration"
    t.string   "municipal_registration"
    t.string   "trade_name"
    t.string   "corporate_name"
    t.string   "phone"
    t.string   "street"
    t.string   "neighborhood"
    t.string   "complement"
    t.string   "cep"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.text     "notes"
    t.integer  "agency_id"
    t.integer  "customer_id"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

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
    t.string   "composite_style"
  end

  create_table "customer_casting_messages", :force => true do |t|
    t.integer  "sender_id"
    t.string   "sender_type"
    t.integer  "receiver_id"
    t.string   "receiver_type"
    t.text     "content"
    t.boolean  "read"
    t.integer  "customer_casting_id"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "customer_castings", :force => true do |t|
    t.string   "name"
    t.integer  "agency_id"
    t.integer  "agency_customer_id"
    t.datetime "created_at",                              :null => false
    t.datetime "updated_at",                              :null => false
    t.boolean  "agency_new_message",   :default => false
    t.boolean  "customer_new_message", :default => false
    t.boolean  "visualized",           :default => false
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
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
  end

  add_index "customers", ["confirmation_token"], :name => "index_customers_on_confirmation_token", :unique => true
  add_index "customers", ["email"], :name => "index_customers_on_email", :unique => true
  add_index "customers", ["reset_password_token"], :name => "index_customers_on_reset_password_token", :unique => true

  create_table "model_castings", :force => true do |t|
    t.integer  "model_id"
    t.integer  "casting_id"
    t.integer  "score"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "model_customer_castings", :force => true do |t|
    t.integer  "customer_casting_id"
    t.integer  "model_id"
    t.integer  "score"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
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
    t.string   "video"
    t.string   "art_name"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.integer  "crop_x"
    t.integer  "crop_y"
    t.integer  "crop_h"
    t.integer  "crop_w"
  end

  create_table "models_specialties", :force => true do |t|
    t.integer "model_id"
    t.integer "specialty_id"
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

  create_table "specialties", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "subscription_plans", :force => true do |t|
    t.integer  "subscription_id"
    t.integer  "months_qty"
    t.decimal  "price"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "subscriptions", :force => true do |t|
    t.string   "name"
    t.boolean  "model_access"
    t.integer  "model_limit"
    t.boolean  "casting_access"
    t.integer  "casting_limit"
    t.boolean  "customer_access"
    t.integer  "customer_limit"
    t.boolean  "website_access"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "testimonials", :force => true do |t|
    t.string   "from",       :limit => 60,  :null => false
    t.string   "title",      :limit => 140, :null => false
    t.text     "body",                      :null => false
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "themes", :force => true do |t|
    t.string   "name"
    t.integer  "owner_id"
    t.string   "owner_type"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
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
    t.string   "external_site"
    t.boolean  "has_custom"
  end

end
