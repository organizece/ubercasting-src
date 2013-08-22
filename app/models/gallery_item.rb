class GalleryItem < ActiveRecord::Base
  attr_accessible :description, :title, :image, :agency_id

  has_attached_file :image, styles: { thumb: "140x140>" }

  belongs_to :agency

  validates :title, presence: true

end
