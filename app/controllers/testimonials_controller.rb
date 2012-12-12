class TestimonialsController < ApplicationController
  layout "main_page"
  
  http_basic_authenticate_with :name => "uberadmin", :password => "ubercastingadmin@1234PP++", :except => [:testimonial_list]
  
  def index
    @testimonials = Testimonial.all
  end

  def show
    @testimonial = Testimonial.find(params[:id])
  end

  def new
    @testimonial = Testimonial.new
  end

  def edit
    @testimonial = Testimonial.find(params[:id])
  end

  def create
    @testimonial = Testimonial.new(params[:testimonial])
    
    respond_to do |format|
      if @testimonial.save
        format.html { redirect_to @testimonial, notice: "Depoimento adicionado com sucesso!" }
      else
        format.html { render action: "new" }
      end
    end
  end

  def update
    @testimonial = Testimonial.find(params[:id])
    
    respond_to do |format|
      if @testimonial.update_attributes(params[:testimonial])
        format.html { redirect_to @testimonial, notice: "Depoimento atualizado com sucesso." }
      else
        format.html { render action: "edit" }
      end
    end
  end

  def destroy
    @testimonial = Testimonial.find(params[:id])
    @testimonial.destroy
    
    respond_to do |format|
      format.html { redirect_to testimonials_url }
    end
  end
  
  def testimonial_list
    @testimonials = Testimonial.all
  end
end
