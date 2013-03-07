class ModelsController < ApplicationController
  before_filter :authenticate_agency!
  helper_method :sort_column, :sort_direction

  # GET /models
  # GET /models.json
  def index
    @models = Model.search(ModelSearchCriteria.build_criteria(params, current_agency))

    @models_ids = []
    @models.each do |model|
      @models_ids << model.id
    end
    @models_ids = @models_ids.join(',')

    @models = @models.order(sort_column + " " + sort_direction).page(params[:page]).per(per_page)
  end

  # GET /models/1
  # GET /models/1.json
  def show
    @model = current_agency.models.find_by_id(params[:id])

  end

  # GET /models/new
  # GET /models/new.json
  def new
    @model = Model.new
    session[:model_step] = nil
  end

  # GET /models/1/edit
  def edit
    @model = current_agency.models.find_by_id(params[:id])
    session[:model_step] = nil

    redirect_to models_path and return unless @model
    @model
  end

  # POST /models
  # POST /models.json
  def create
    if params[:model][:specialty_ids].class == String
      if params[:model][:specialty_ids] == '[]'
        # In this case, there is no IDs
        params[:model][:specialty_ids] = nil
      else
        params[:model][:specialty_ids] = params[:model][:specialty_ids].slice(1, params[:model][:specialty_ids].length - 2)
        params[:model][:specialty_ids] = params[:model][:specialty_ids].split(",").map { |s| s.to_i }
      end
    end
    @model = Model.new(params[:model])
    @model.agency = current_agency
    @model.current_step = session[:model_step]

    if @model.valid?
      if params[:back_button]
        @model.previous_step
      elsif @model.last_step?
        @model.save if @model.all_valid?
      else
        @model.next_step
      end
      session[:model_step] = @model.current_step
    end

    if @model.new_record?
      render "new"
    else
      session[:model_step] = nil
      flash[:notice] = "Modelo criado com sucesso."
      redirect_to new_model_photo_path(@model)
    end
  end

  # Method called by the application step-by-step update flow
  def update
    @model = current_agency.models.find_by_id(params[:id])
    if params[:model][:specialty_ids].class == String
      if params[:model][:specialty_ids] == '[]'
        # In this case, there is no IDs
        params[:model][:specialty_ids] = nil
      else
        params[:model][:specialty_ids] = params[:model][:specialty_ids].slice(1, params[:model][:specialty_ids].length - 2)
        params[:model][:specialty_ids] = params[:model][:specialty_ids].split(",").map { |s| s.to_i }
      end
    end
    @model.attributes = params[:model]

    @model.current_step = session[:model_step]

    editing = true
    if @model.valid?
      if params[:back_button]
        @model.previous_step
      elsif params[:end_button]
        if @model.all_valid?
          @model.save
          editing = false
        end
      elsif @model.last_step?
        if @model.all_valid?
          @model.save
          editing = false
        end
      else
        @model.next_step
      end
      session[:model_step] = @model.current_step
    end

    if editing
      render "edit"
    else
      session[:model_step] = nil
      flash[:notice] = "Modelo atualizado com sucesso."
      if params[:end_button]
        redirect_to models_path()
      else
        redirect_to new_model_photo_path(@model, {source: 'edit'})
      end
    end
  end

  # Method called via ajax to update the model avatar
  def update_avatar
    @model = Model.find(params[:model_id])
    @model.avatar_photo_id = Integer(params[:avatar_photo_id])

    respond_to do |format|
      if @model.save
        format.js { flash[:notice] = 'Avatar atualizado com sucesso.' }
      else
        format.js
      end
    end
  end

  # DELETE /models/1
  # DELETE /models/1.json
  def destroy
    @model = current_agency.models.find_by_id(params[:id])
    @model.destroy if @model

    respond_to do |format|
      redirect_to models_path and return unless @model
      format.html { redirect_to models_url }
      format.json { head :no_content }
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
