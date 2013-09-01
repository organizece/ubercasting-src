class GalleryItemsController < ApplicationController
    before_filter :validate_agency

    def index
        @gallery_items = current_agency.gallery_items.order(sort_column).page(params[:page]).per(per_page)
    end

    def show
        @gallery_item = GalleryItem.find(params[:id])
    end

    def new
        @gallery_item = GalleryItem.new
    end

    def create
        @gallery_item = GalleryItem.new(params[:gallery_item])
        @gallery_item.agency = current_agency

        respond_to do |format|
            if @gallery_item.save
                format.html { redirect_to gallery_items_url, notice: 'Item de galeria criado com sucesso.' }
            else
                format.html { render action: "new" }
            end
        end
    end

    def edit
    	@gallery_item = GalleryItem.find(params[:id])
    end

    def update
        @gallery_item = GalleryItem.find(params[:id])

        respond_to do |format|
            if @gallery_item.update_attributes(params[:gallery_item])
                format.html { redirect_to gallery_items_url, notice: 'Item de galeria atualizado com sucesso.' }
            else
                format.html { render action: "edit" }
            end
        end
    end

    def destroy
    	@gallery_item = GalleryItem.find(params[:id])
        @gallery_item.destroy
        flash[:notice] = 'Item de galeria excluido com sucesso.'

        respond_to do |format|
            format.html { redirect_to gallery_items_url }
            format.js
        end
    end

    def sort_column
        column = "title asc"

        if params[:order_column]
          sort = params[:order_column].split(';') 
          column = sort[0] + ' ' + sort[1] if GalleryItem.column_names.include?(sort[0])
        end
        
        column
    end

    def per_page
        ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : ITENS_PER_PAGE[0]
    end

    private

    def validate_agency
        # Clear the location of subdomain
        clear_location

        # First runs the Devise authenticator
        authenticate_agency!

        # Check if the agency is active
        check_active_agency
    end

    end
