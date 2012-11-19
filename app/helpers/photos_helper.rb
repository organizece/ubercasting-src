module PhotosHelper

  def photo_url(photo_id, url_type=nil)
    photo = Photo.find(photo_id)

    photo.image.url(url_type)
  end
end
