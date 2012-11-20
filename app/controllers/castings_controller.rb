class CastingsController < ApplicationController
  before_filter :authenticate_agency!

  # GET /castings
  # GET /castings.json
  def index
    @castings = Casting.search(params[:name], current_agency.id).
      order(index_sort_column).page(params[:page]).per(per_page)
    @casting = Casting.new
  end

  # GET /castings/1
  # GET /castings/1.json
  def show
    @casting = Casting.find(params[:id])
    @casting_models = ModelCasting.where(casting_id: @casting.id).joins(:model).
      order(show_sort_column).page(params[:page]).per(per_page)
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
        format.html { redirect_to @casting, notice: 'Casting criado com sucesso.' }
        format.json { render json: @casting, status: :created, location: @casting }
        format.js { flash[:notice] = 'Casting criado com sucesso.' }
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
        format.html { redirect_to @casting, notice: 'Casting atualizado com sucesso.' }
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
      format.js { flash[:notice] = 'Casting deletado com sucesso.' }
    end
  end

  def index_sort_column
    column = "created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if Casting.column_names.include?(sort[0])
    end
    
    column
  end

  def show_sort_column
    column = "model_castings.created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if Model.column_names.include?(sort[0])
      column = sort[0] + ' ' + sort[1] if ModelCasting.column_names.include?(sort[0])
    end
    
    column
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

end
