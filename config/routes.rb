Ubercasting::Application.routes.draw do

  devise_for :customers

  devise_for :agencies, :controllers => { :sessions => "agencies/sessions" }

  match 'home' => 'main_pages#home', via: :get
  match 'who_we_are' => 'main_pages#who_we_are', via: :get
  match 'tour' => 'main_pages#tour', via: :get
  match 'viewtestimonials' => 'testimonials#testimonial_list', via: :get

  resources :models do
    match 'update_avatar/:avatar_photo_id' => 'models#update_avatar', via: :put, as: :update_avatar
    resources :photos, except: [:edit, :update]
    resources :composites, except: [:index, :destroy]
  end

  get 'castings/open_add_models/'
  post 'castings/save_add_models/'

  resources :castings

  resources :model_castings, only: [:destroy] do
    match 'update_score/:score' => 'model_castings#update_score', via: :put, as: :update_score
  end

  resources :agencies, except: [:index]

  resources :testimonials

  resources :websites, only: [:edit, :update]
  get 'websites/verify_subdomain'

  match 'connect_sites' => 'agencies#connect_sites', via: :get

  match "find_cep/:cep" => "utilities#find_cep", via: :get, as: :find_cep

  match "control_panel/" => "control_panel#show", as: :agency_root

  match "customer_panel/" => "main_pages#who_we_are", as: :customer_root

  match "/:subdomain/home" => "subdomain_websites#home", via: :get, as: :subdomain_websites_home
  match "/:subdomain/about" => "subdomain_websites#about", via: :get, as: :subdomain_websites_about
  match "/:subdomain/contact_us" => "subdomain_websites#contact_us", via: :get, as: :subdomain_websites_contact_us
  match "/:subdomain/models" => "subdomain_models#index", via: :get, as: :subdomain_website_models
  match "/:subdomain/castings" => "subdomain_castings#index", via: :get, as: :subdomain_website_castings
  match "/:subdomain/castings" => "subdomain_castings#create", via: :post, as: :subdomain_website_castings
  match "/:subdomain/castings/:id" => "subdomain_castings#show", via: :get, as: :subdomain_website_casting
  match "/:subdomain/castings/:id" => "subdomain_castings#destroy", via: :delete, as: :subdomain_website_casting

  root :to => "main_pages#home"

end
