Ubercasting::Application.routes.draw do

  devise_for :customers

  devise_for :agencies, :controllers => { :sessions => "agencies/sessions", :registrations => "agencies/registrations" }, :path_prefix => 'my'

  match 'home' => 'main_pages#home', via: :get
  match 'who_we_are' => 'main_pages#who_we_are', via: :get
  match 'tour' => 'main_pages#tour', via: :get
  match 'viewtestimonials' => 'testimonials#testimonial_list', via: :get

  resources :models do
    match 'update_avatar/:avatar_photo_id' => 'models#update_avatar', via: :put, as: :update_avatar
    resources :photos, except: [:edit, :update]
    resources :composites, except: [:index, :destroy]
  end

  # Routes to Casting pages
  get 'castings/open_add_models/'
  post 'castings/save_add_models/'
  get 'castings/destroy_selected'

  resources :castings do
    match 'remove_models' => 'castings#remove_models', via: :get, as: :remove_models
  end

  resources :model_castings, only: [:destroy] do
    match 'update_score/:score' => 'model_castings#update_score', via: :put, as: :update_score
  end

  # Routes do Customer Casting Routes
  post 'customer_castings/save_add_models/'
  get 'customer_castings/destroy_selected'

  resources :customer_castings, only: [:index, :show, :destroy] do
    match 'remove_models' => 'customer_castings#remove_models', via: :get, as: :remove_models
  end

  resources :model_customer_castings, only: [:destroy] do
    match 'update_score/:score' => 'model_customer_castings#update_score', via: :put, as: :update_score
  end

  resources :agencies, except: [:index]

  resources :testimonials

  resources :websites, only: [:edit, :update]
  get 'websites/verify_subdomain'

  match 'connect_sites' => 'agencies#connect_sites', via: :get

  match "find_cep/:cep" => "utilities#find_cep", via: :get, as: :find_cep

  match "control_panel/" => "control_panel#show", as: :agency_root

  match "customer_panel/" => "main_pages#who_we_are", as: :customer_root

  # Subdomain routes to static pages
  match "/:subdomain" => "subdomain_websites#home", via: :get, as: :subdomain_websites_home
  match "/:subdomain/home" => "subdomain_websites#home", via: :get, as: :subdomain_websites_home
  match "/:subdomain/about" => "subdomain_websites#about", via: :get, as: :subdomain_websites_about
  match "/:subdomain/contact_us" => "subdomain_websites#contact_us", via: :get, as: :subdomain_websites_contact_us
  match "/:subdomain/be_model" => "subdomain_websites#be_model", via: :get, as: :subdomain_websites_be_model

  # Subdomain routes to models pages
  match "/:subdomain/models" => "subdomain_models#index", via: :get, as: :subdomain_models

  # Subdomain routes to castings pages
  match '/:subdomain/castings/add_models/' => "subdomain_castings#open_add_models", via: :get, as: :subdomain_castings_add_models
  match '/:subdomain/castings/add_models/' => "subdomain_castings#save_add_models", via: :post, as: :subdomain_castings_add_models
  match "/:subdomain/castings/destroy_selected" => "subdomain_castings#destroy_selected", via: :get, as: :subdomain_castings_destroy_selected
  match "/:subdomain/castings" => "subdomain_castings#index", via: :get, as: :subdomain_castings
  match "/:subdomain/castings" => "subdomain_castings#create", via: :post, as: :subdomain_castings
  match "/:subdomain/castings/:id" => "subdomain_castings#show", via: :get, as: :subdomain_casting
  match "/:subdomain/castings/:id" => "subdomain_castings#destroy", via: :delete, as: :subdomain_casting
  match "/:subdomain/castings/:id/remove_models" => "subdomain_castings#remove_models", via: :get, as: :subdomain_casting_remove_models

  match "/:subdomain/model_castings/:id" => "subdomain_model_castings#destroy", via: :delete, as: :subdomain_model_casting
  match "/:subdomain/model_castings/:id/update_score/:score" => "subdomain_model_castings#update_score", via: :put, as: :subdomain_model_casting_update_score


  root :to => "main_pages#home"

end
