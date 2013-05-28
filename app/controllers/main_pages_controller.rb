class MainPagesController < ApplicationController
  layout "main_page"

  before_filter :clear_location

  def home
  end

  def who_we_are
  end

  def tour
  end

  def viewtestimonials
  end

private

  def use_https?
    false # Override in other controllers
  end
  
end
