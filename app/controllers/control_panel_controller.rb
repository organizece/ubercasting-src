class ControlPanelController < ApplicationController
  before_filter :authenticate_agency!

  def show
    @agency = current_agency
  end
end
