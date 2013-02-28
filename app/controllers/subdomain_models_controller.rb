class SubdomainModelsController < ApplicationController
  layout :subdomain_layout

  def index
    @website = Website.find_by_subdomain(params[:subdomain])
    @models = Model.search(ModelSearchCriteria.build_criteria(params, @website.agency))

    @visualization_mode = @website.visualization_mode
    @visualization_mode = 'total_access' if customer_total_access?

    @models_ids = []
    @models.each do |model|
      @models_ids << model.id
    end
    @models_ids = @models_ids.join(',')

    @models = @models.order(sort_column + " " + sort_direction).page(params[:page]).per(per_page)
  end

  def show
    #TODO Melhoria: Validar se cliente realmente deveria ter acesso (logado ou site aberto)
    @website = Website.find_by_subdomain(params[:subdomain])
    @model = @website.agency.models.find(params[:id])
  end
  
  def composite
    @composite = Model.find(params[:id]).composite
    @total_access = customer_total_access?

    respond_to do |format|
      format.js
    end
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

  def customer_total_access?
    total_access = false
    
    if customer_signed_in?
      # If customer is signed in validate if it has an association with the agency
      website = Website.find_by_subdomain(params[:subdomain])
      agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(website.agency.id, current_customer.id)

      total_access = true if agency_customer
    end

    total_access
  end

end