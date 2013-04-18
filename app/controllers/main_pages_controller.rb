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
  
end
