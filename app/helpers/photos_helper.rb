module PhotosHelper

  def photo_tag(photo_id, url_type=nil)
    photo = Photo.find_by_id(photo_id)

    if photo
      image_tag photo.image.url(url_type), class: 'rounded'
    else
      if url_type
        image_tag "mock_#{url_type}.png", class: 'rounded'
      else
        image_tag 'mock_avatar.png', class: 'rounded'
      end
    end
  end

  def avatar_tag(avatar, url_type=nil)
    if avatar
      image_tag avatar.image.url(url_type), class: 'rounded'
    else
      if url_type
        image_tag "mock_#{url_type}.png", class: 'rounded'
      else
        image_tag 'mock_avatar.png', class: 'rounded'
      end
    end
  end

end
