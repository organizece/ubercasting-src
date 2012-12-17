class SubdomainModelsController < ApplicationController
  layout :subdomain_layout

  def index
    @website = Website.find_by_subdomain(params[:subdomain])
    @models = Model.search(ModelSearchCriteria.build_criteria(params, @website.agency))
    #TODO arrumar p/ levar em consideração cliente associado a agencia
    @visualization_mode = @website.visualization_mode
    @visualization_mode = 'total_access' if customer_signed_in?

    @models_ids = []
    @models.each do |model|
      @models_ids << model.id
    end
    @models_ids = @models_ids.join(',')

    @models = @models.order(sort_column + " " + sort_direction).page(params[:page]).per(per_page)
  end

private
  def subdomain_layout
    if params[:subdomain] && !params[:subdomain].empty?
      website = Website.find_by_subdomain(params[:subdomain])
      website.theme
    else
      'subdomain_default'
    end
  end

  def sort_column
    Model.column_names.include?(params[:order_column]) ? params[:order_column] : "name"
  end
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

end