class AgenciesController < ApplicationController
    before_filter :validate_agency
    before_filter :first_access?, except: [:edit, :update, :connect_sites, :create_file]

    #layout "application"
    layout :resolve_layout

    def show
      @agency = current_agency
    end

    def edit
      @agency = current_agency
      @website = @agency.website
    end

    def update
      @agency = Agency.find(params[:id])

      respond_to do |format|
        if @agency.update_attributes(params[:agency])
          format.html {  }
          format.json { head :no_content }
        else
          format.html { render action: :edit }
          format.json { render json: @agency.errors, status: :unprocessable_entity }
        end
      end
    end

    def first_access?
      redirect_to edit_agency_path(current_agency) if !current_agency.website
    end
    
    def connect_sites
      @agency = current_agency
    end
    
    def create_file
      @agency = current_agency
      
      @text = params[:html_content]
      out = render_to_string(:action => 'uber_index')

      filename = File.join(Rails.root , 'tmp', \
      'files', @agency.id.to_s+'-uber-index.html')
      File.open(filename, 'w') do |f|
        f.write(out)
      end
      
      filepath = "#{Rails.root}/tmp/files/"+@agency.id.to_s+'-uber-index.html'
      
      send_file(filepath, :filename => @agency.id.to_s+'-uber-index.html')
      
    end

private
  
  def validate_agency
    # Clear the location of subdomain
    clear_location
    
    # First runs the Devise authenticator
    authenticate_agency!
  end
  
  def resolve_layout
      case action_name
      when "create_file"
        "blank"
      else
        "application"
      end
    end

end