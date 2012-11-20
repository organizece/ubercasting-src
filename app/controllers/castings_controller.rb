class CastingsController < ApplicationController
  before_filter :authenticate_agency!

  # GET /castings
  # GET /castings.json
  def index
    @castings = Casting.search(params[:name], current_agency.id).
      order(sort_column + " " + sort_direction).page(params[:page]).per(per_page)
    @casting = Casting.new
  end

  # GET /castings/1
  # GET /castings/1.json
  def show
    @casting = Casting.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @casting }
    end
  end

  # GET /castings/new
  # GET /castings/new.json
  def new
    @casting = Casting.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @casting }
    end
  end

  # GET /castings/1/edit
  def edit
    @casting = Casting.find(params[:id])
  end

  # POST /castings
  # POST /castings.json
  def create
    @casting = Casting.new(params[:casting])
    @casting.agency = current_agency

    respond_to do |format|
      if @casting.save
        format.html { redirect_to @casting, notice: 'Casting was successfully created.' }
        format.json { render json: @casting, status: :created, location: @casting }
        format.js
      else
        format.html { render action: "new" }
        format.json { render json: @casting.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  # PUT /castings/1
  # PUT /castings/1.json
  def update
    @casting = Casting.find(params[:id])

    respond_to do |format|
      if @casting.update_attributes(params[:casting])
        format.html { redirect_to @casting, notice: 'Casting was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @casting.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /castings/1
  # DELETE /castings/1.json
  def destroy
    @casting = Casting.find(params[:id])
    @casting.destroy

    respond_to do |format|
      format.html { redirect_to castings_url }
      format.json { head :no_content }
      format.js
    end
  end

  def sort_column
    Casting.column_names.include?(params[:order_column]) ? params[:order_column] : "created_at"
  end
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

end