class SubdomainGalleryController < ApplicationController
    layout :subdomain_layout

    def index
        @website = Website.find_by_subdomain(request.subdomain)
        @gallery_items = @website.agency.gallery_items.order(sort_column).page(params[:page]).per(per_page)
    end

    def show
        @gallery_item = GalleryItem.find(params[:id])
    end

private

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

    def subdomain_layout
        if request.subdomain && !request.subdomain.empty?
            website = Website.find_by_subdomain(request.subdomain)
            website.theme
        else
            'subdomain_default'
        end
    end

    def use_https?
        false # Override in other controllers
    end

end
