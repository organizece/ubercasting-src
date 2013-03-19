module ApplicationHelper

  def states
    states = []
    STATES.each { |state|
        states << [t(state, scope: :states), state]
    }
    
    states
  end

  def itens_per_page
    itens_per_page = []
    ITENS_PER_PAGE.each do |per_page|
      itens_per_page << [per_page, per_page]
    end

    itens_per_page
  end

  def start_year
      Time.now.year
  end

  def end_year
    1900
  end

  def default_year
    #Time.now.years_ago(18)
    Time.now
  end

  def flash_css_class(name)
    css_class = "alert"
    css_class += " alert-success" if name == :notice
    css_class += " alert-error" if name == :error

    css_class 
  end

  def wicked_pdf_image_tag(img, options={})
    if Rails.env.production?
      if img.include? "s3.amazonaws.com"
        image_tag img, options
      else
        image_tag "file://#{Rails.root.join('app', 'assets', 'images', img)}", options
      end
    else
      if img[0].chr == "/" # images from paperclip
        new_image = img.slice 1..-1
        image_tag "file://#{Rails.root.join('public', new_image)}", options
      else
        image_tag "file://#{Rails.root.join('app', 'assets', 'images', img)}", options
      end
    end
  end

end
