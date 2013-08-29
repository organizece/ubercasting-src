class GalleryItem < ActiveRecord::Base
  attr_accessible :description, :title, :image, :agency_id

  has_attached_file :image, styles: { thumb: "600x512>",
                                      gallery: "960x768>" }

  belongs_to :agency

  validates :title, presence: true

end
