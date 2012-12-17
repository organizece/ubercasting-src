class CreateWebsites < ActiveRecord::Migration
  def change
    create_table :websites do |t|
      #Website fields
      t.string :subdomain
      t.string :visualization_mode
      t.string :theme, default: 'subdomain_default'
      t.text :footer
      t.boolean :footer_navigation_itens
      t.has_attached_file :logo

      #Layout fields
      t.has_attached_file :body_background_image
      t.string :body_background_color
      t.string :body_font_family
      t.string :body_font_size
      t.string :body_font_color
      t.string :header_background_color
      t.string :header_font_family
      t.string :header_font_size
      t.string :header_font_color
      t.string :navigation_background_color
      t.string :navigation_font_family
      t.string :navigation_font_size
      t.string :navigation_font_color
      t.string :content_background_color
      t.string :content_font_family
      t.string :content_font_size
      t.string :content_font_color
      t.string :footer_background_color
      t.string :footer_font_family
      t.string :footer_font_size
      t.string :footer_font_color

      #Page exibition fields
      t.boolean :home, default: true
      t.boolean :models, default: true
      t.boolean :castings, default: true
      t.boolean :about, default: true
      t.boolean :contact_us, default: true
      t.boolean :create_account, default: true
      t.boolean :my_site, default: true
      t.boolean :be_a_model, default: true

      t.integer :agency_id

      t.timestamps
    end
  end
end
