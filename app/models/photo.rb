class Photo < ActiveRecord::Base
  include Rails.application.routes.url_helpers

  belongs_to :model

  attr_accessible :image

  has_attached_file :image, styles: { thumb: "140x140>", 
                                      search: "300x256>", 
                                      main_composite: "400x567>",
                                      sub_composite: "190x242>" }

  #one convenient method to pass jq_upload the necessary information
  def to_jq_upload
    {
      "name" => image_file_name,
      "size" => image_file_size,
      "url" => image.url,
      "thumbnail_url" => image.url(:thumb),
      "delete_url" => model_photo_path(model_id: model.id, id: id),
      "delete_type" => "DELETE",
      "change_avatar_url" => model_update_avatar_path(model_id: model.id, avatar_photo_id: id)
    }
  end

end
