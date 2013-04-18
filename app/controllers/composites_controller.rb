class CompositesController < ApplicationController
  before_filter :validate_agency

  # GET /composites
  # GET /composites.json
  def index
    @composites = Composite.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @composites }
    end
  end

  # GET /composites/1
  # GET /composites/1.json
  def show
    @composite = Composite.find(params[:id])

    respond_to do |format|
      format.html
      format.js
      format.pdf do
        render pdf: @composite.model.name,
               disposition: 'attachment',  
               layout: 'pdf.html',
               orientation: 'Landscape',
               margin: {top: 0, right: 0, bottom: 0, left: 0}
      end
    end
  end

  # GET /composites/new
  # GET /composites/new.json
  def new
    @model = Model.find(params[:model_id])
    @composite = Composite.new
    @composite.model = @model

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @composite }
    end
  end

  # GET /composites/1/edit
  def edit
    @composite = Composite.find(params[:id])
    @model = @composite.model
  end

  # POST /composites
  # POST /composites.json
  def create
    @composite = Composite.new(params[:composite])
    @model = Model.find(params[:model_id])
    @composite.model = @model

    if params[:back_button]
      redirect_to new_model_photo_path(@model, {source: params[:source]})
    else
      respond_to do |format|
        if @composite.save
          format.html { redirect_to models_path, notice: 'Composite criado com sucesso.' }
          format.json { render json: @composite, status: :created, location: @composite }
        else
          format.html { render action: "new" }
          format.json { render json: @composite.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PUT /composites/1
  # PUT /composites/1.json
  def update
    @composite = Composite.find(params[:id])

    if params[:back_button]
      @model = Model.find(params[:model_id])
      redirect_to new_model_photo_path(@model, {source: 'edit'})
    else
      respond_to do |format|
        if @composite.update_attributes(params[:composite])
          format.html { redirect_to models_path, notice: 'Composite atualizado com sucesso.' }
          format.json { head :no_content }
        else
          format.html { render action: "edit" }
          format.json { render json: @composite.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /composites/1
  # DELETE /composites/1.json
  def destroy
    @composite = Composite.find(params[:id])
    @composite.destroy

    respond_to do |format|
      format.html { redirect_to composites_url }
      format.json { head :no_content }
    end
  end

private

  def validate_agency
    # Clear the location of subdomain
    clear_location
    
    # First runs the Devise authenticator
    authenticate_agency!

    # If agency is loged in validate if it has permission to access the controller
    unless current_agency.subscription.model_access?
      flash[:error] = 'O seu perfil de assinatura nao tem permissao p/ acessar a funcionalidade.'
      redirect_to agency_root_path
    end
  end

end
