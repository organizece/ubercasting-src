Ubercasting::Application.routes.draw do

  resources :model_castings, only: [:destroy] do
    match 'update_score/:score' => 'model_castings#update_score', via: :put, as: :update_score
  end

  resources :castings

  match 'home' => 'main_pages#home', via: :get
  match 'who_we_are' => 'main_pages#who_we_are', via: :get
  match 'tour' => 'main_pages#tour', via: :get
  match 'testemonials' => 'main_pages#testemonials', via: :get

  devise_for :agencies, :controllers => { :sessions => "agencies/sessions" }

  resources :models do
    match 'update_avatar/:avatar_photo_id' => 'models#update_avatar', via: :put, as: :update_avatar
    match 'open_add_to_casting/' => 'models#open_add_to_casting', via: :get, as: :open_add_to_casting
    match 'add_to_casting/' => 'models#save_add_to_casting', via: :post, as: :add_to_casting
    resources :photos, except: [:edit, :update]
    resources :composites, except: [:index, :destroy]
  end

  resources :agencies, except: [:index]

  match "find_cep/:cep" => "utilities#find_cep", via: :get, as: :find_cep

  match "control_panel/" => "control_panel#show", as: :agency_root

  #root :to => "control_panel#show"
  root :to => "main_pages#home"

end
