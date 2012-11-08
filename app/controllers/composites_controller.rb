class CompositesController < ApplicationController
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
      format.html # show.html.erb
      format.json { render json: @composite }
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
      redirect_to new_model_photo_path(@model)
    else
      respond_to do |format|
        if @composite.save
          format.html { redirect_to models_path, notice: 'Composite was successfully created.' }
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

    respond_to do |format|
      if @composite.update_attributes(params[:composite])
        format.html { redirect_to models_path, notice: 'Composite was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @composite.errors, status: :unprocessable_entity }
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
end
