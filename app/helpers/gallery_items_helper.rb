module GalleryItemsHelper

    def gallery_items_order_columns
        columns = []
        columns << ['A -> Z', 'title;asc']
        columns << ['Z -> A', 'title;desc']

        columns
    end

end
