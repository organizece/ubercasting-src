class Photo < ActiveRecord::Base
  include Rails.application.routes.url_helpers

  belongs_to :model

  attr_accessible :image

  has_attached_file :image, styles: { thumb: "128x128>" }

  #one convenient method to pass jq_upload the necessary information
  def to_jq_upload
    {
      "name" => image_file_name,
      "size" => image_file_size,
      "url" => image.url,
      "thumbnail_url" => image.url(:thumb),
      "delete_url" => model_photo_path(model_id: model.id, id: id),
      "delete_type" => "DELETE" 
    }
  end

end
