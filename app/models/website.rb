class Website < ActiveRecord::Base
  attr_accessible :subdomain, :visualization_mode, :theme, :footer, :footer_navigation_itens, :logo, :logo_url,
    :body_background_image, :body_background_color, :body_font_family, :body_font_size, :body_font_color,
    :header_background_color, :header_font_family, :header_font_size, :header_font_color,
    :navigation_background_color, :navigation_font_family, :navigation_font_size, :navigation_font_color,
    :content_background_color, :content_font_family, :content_font_size, :content_font_color,
    :footer_background_color, :footer_font_family, :footer_font_size, :footer_font_color,
    :home, :models, :castings, :about, :contact_us, :create_account, :my_site, :be_a_model, :external_site

  has_attached_file :logo, styles: { logo: "600x150>" }
  has_attached_file :body_background_image

  belongs_to :agency

  validates :subdomain, uniqueness: true, allow_nil: true
  
end
