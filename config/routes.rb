Ubercasting::Application.routes.draw do

  resources :testimonials

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
  
  match 'connect_sites' => 'agencies#connect_sites', via: :get

  match "find_cep/:cep" => "utilities#find_cep", via: :get, as: :find_cep

  match "control_panel/" => "control_panel#show", as: :agency_root

  match "/:subdomain/home" => "websites#home", as: :websites_home
  match "/:subdomain/about" => "websites#about", as: :websites_about
  match "/:subdomain/contact_us" => "websites#contact_us", as: :websites_contact_us

  root :to => "main_pages#home"

end
