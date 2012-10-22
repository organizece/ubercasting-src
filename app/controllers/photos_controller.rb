class PhotosController < ApplicationController
  # GET /photos
  # GET /photos.json
  def index
    @model = Model.find(params[:model_id])
    @photos = @model.photos

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @photos.collect { |p| p.to_jq_upload }.to_json }
    end
  end

  # GET /photos/1
  # GET /photos/1.json
  def show
    @photo = Photo.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @photo }
    end
  end

  # GET /photos/new
  # GET /photos/new.json
  def new
    @photo = Photo.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @photo }
    end
  end

  # POST /photos
  # POST /photos.json
  def create
    @photo = Photo.new
    @photo.image = params[:photo][:image].shift
    @photo.model_id = params[:model_id]
    if @photo.save
      respond_to do |format|
        format.html {  
          render :json => [@photo.to_jq_upload].to_json, 
          :content_type => 'text/html',
          :layout => false
        }
        format.json {  
          render :json => [@photo.to_jq_upload].to_json     
        }
      end
    else 
      render :json => [{:error => "custom_failure"}], :status => 304
    end
  end

  # DELETE /photos/1
  # DELETE /photos/1.json
  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy

    respond_to do |format|
      format.html { redirect_to model_gallery_path }
      format.json { head :no_content }
    end
  end
end
