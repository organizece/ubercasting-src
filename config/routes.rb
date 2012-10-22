Ubercasting::Application.routes.draw do

  devise_for :agencies, :controllers => { :sessions => "agencies/sessions" }

  resources :models do
    resources :photos, except: [:edit, :update, :index]
    match "gallery/" => "photos#index"
  end

  resources :agencies, except: [:index]

  match "find_cep/:cep" => "utilities#find_cep", via: :get, as: :find_cep

  match "control_panel/" => "control_panel#show", as: :agency_root

  root :to => "control_panel#show"

end
