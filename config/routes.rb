Ubercasting::Application.routes.draw do

  root :to => "main_pages#home"
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  as :customer do
    match '/customer/confirmation' => 'customers/confirmations#update', :via => :put, :as => :update_customer_confirmation
  end

  devise_for :customers, :controllers => { :sessions => "customers/sessions", :confirmations => "customers/confirmations", :passwords => "customers/passwords" }
  ActiveAdmin.routes(self)

  as :agency do
    match '/my/agencies/do_payment' => 'agencies/registrations#do_payment', via: :post, as: :agency_do_payment
    match '/my/agencies/confirm_paypal_payment' => 'agencies/registrations#confirm_paypal_payment', via: :get, as: :agency_confirm_paypal_payment
    match '/my/agencies/confirm_pagseguro_payment' => 'agencies/registrations#confirm_pagseguro_payment', via: :get, as: :agency_confirm_pagseguro_payment
    match '/my/agencies/cancel_subscription' => 'agencies/registrations#cancel_subscription', via: :get, as: :agency_cancel_subscription
    match '/my/agencies/change_subscription' => 'agencies/registrations#change_subscription', via: :get, as: :agency_change_subscription
    match '/my/agencies/confirm_change_subscription' => 'agencies/registrations#confirm_change_subscription', via: :get, as: :agency_confirm_change_subscription
  end

  devise_for :agencies, :controllers => { :sessions => "agencies/sessions", :registrations => "agencies/registrations", :passwords => "agencies/passwords", :confirmations => "agencies/confirmations" }, :path_prefix => 'my'
  ActiveAdmin.routes(self)

  match 'home' => 'main_pages#home', via: :get
  match 'who_we_are' => 'main_pages#who_we_are', via: :get
  match 'tour' => 'main_pages#tour', via: :get
  match 'help' => 'main_pages#help', via: :get
  match 'contract' => 'main_pages#contract', via: :get
  match 'policy' => 'main_pages#policy', via: :get
  match 'viewtestimonials' => 'testimonials#testimonial_list', via: :get

  resources :models do
    match 'update_avatar/:avatar_photo_id' => 'models#update_avatar', via: :put, as: :update_avatar
    match 'update_model_video' => 'models#update_video', via: :put, as: :update_video
    match 'profile_pic' => 'models#open_profile_pic', via: :get, as: :profile_pic
    match 'profile_pic' => 'models#save_profile_pic', via: :post, as: :profile_pic
    resources :photos, except: [:edit, :update]
    resources :composites, except: [:index, :destroy]
  end

  # Routes to Casting pages
  get 'castings/open_add_models/'
  post 'castings/save_add_models/'
  get 'castings/destroy_selected'

  resources :castings do
    match 'remove_models' => 'castings#remove_models', via: :get, as: :remove_models
    match 'share' => 'castings#open_share', via: :get, as: :share
    match 'share' => 'castings#share', via: :post, as: :share
    match 'export' => 'castings#export', via: :get, as: :export
  end

  resources :model_castings, only: [:destroy] do
    match 'update_score/:score' => 'model_castings#update_score', via: :put, as: :update_score
  end

  # Routes do Customer Casting Routes
  post 'customer_castings/save_add_models/'
  get 'customer_castings/destroy_selected'

  resources :customer_castings, only: [:index, :show, :destroy] do
    match 'remove_models' => 'customer_castings#remove_models', via: :get, as: :remove_models
    match 'messages' => 'customer_castings#open_messages', via: :get, as: :messages
    match 'messages' => 'customer_castings#save_messages', via: :post, as: :messages
    match 'external_url' => 'customer_castings#open_external_url', via: :get, as: :external_url
  end

  resources :model_customer_castings, only: [:destroy] do
    match 'update_score/:score' => 'model_customer_castings#update_score', via: :put, as: :update_score
  end

  # Agency Routes
  resources :agencies, except: [:index]

  get 'agency_customers/destroy_selected'
  get 'agency_customers/new_from_request'
  resources :agency_customers

  get 'agency_customer_requests/destroy_selected'
  resources :agency_customer_requests, only: [:index, :show, :destroy]

  # Testimonials Routes
  resources :testimonials

  resources :websites, only: [:edit, :update]
  get 'websites/verify_subdomain'
  match "/websites/:id/guide" => "websites#guide", via: :get, as: :website_guide
  match "/websites/:id/guide_intro" => "websites#guide_intro", via: :get, as: :website_guide_intro
  match "/websites/guide_update/:id" => "websites#guide_update", via: :get, as: :website_guide_update
  match "/websites/update_agency_about/:id" => "websites#update_agency_about", via: :get, as: :website_update_agency_about

  match 'connect_sites' => 'agencies#connect_sites', via: :get
  match 'create_file' => 'agencies#create_file', via: :post, as: :create_uber_file

  match "find_cep/:cep" => "utilities#find_cep", via: :get, as: :find_cep

  match "control_panel/" => "control_panel#show", as: :agency_root

  match "customer_panel/" => "main_pages#home", as: :customer_root

  # Subdomain routes to static pages
  match "/website" => "subdomain_websites#home", via: :get, as: :subdomain_websites_home, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/home" => "subdomain_websites#home", via: :get, as: :subdomain_websites_home, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/about" => "subdomain_websites#about", via: :get, as: :subdomain_websites_about, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/casting_foreign" => "subdomain_websites#casting_foreign", via: :get, as: :subdomain_websites_casting_foreign, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/contact_us" => "subdomain_websites#contact_us", via: :get, as: :subdomain_websites_contact_us, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/contact_us" => "subdomain_websites#send_contact_us", via: :post, as: :subdomain_websites_send_contact_us, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/be_model" => "subdomain_websites#be_model", via: :get, as: :subdomain_websites_be_model, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/be_model" => "subdomain_websites#send_be_model", via: :post, as: :subdomain_websites_send_be_model, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }

  # Subdomain routes to models pages
  match "/website/models" => "subdomain_models#index", via: :get, as: :subdomain_models, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/models/:id" => "subdomain_models#show", via: :get, as: :subdomain_model, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/models/:id/composite" => "subdomain_models#composite", via: :get, as: :subdomain_model_composite, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }

  # Subdomain routes to castings pages
  match "/website/castings/add_models/" => "subdomain_castings#open_add_models", via: :get, as: :subdomain_castings_add_models, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/add_models/" => "subdomain_castings#save_add_models", via: :post, as: :subdomain_castings_add_models, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/destroy_selected" => "subdomain_castings#destroy_selected", via: :get, as: :subdomain_castings_destroy_selected, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings" => "subdomain_castings#index", via: :get, as: :subdomain_castings, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings" => "subdomain_castings#create", via: :post, as: :subdomain_castings, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/:id" => "subdomain_castings#show", via: :get, as: :subdomain_casting, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/:id" => "subdomain_castings#destroy", via: :delete, as: :subdomain_casting, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/:id/remove_models" => "subdomain_castings#remove_models", via: :get, as: :subdomain_casting_remove_models, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/:id/messages" => "subdomain_castings#open_messages", via: :get, as: :subdomain_casting_messages, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/castings/:id/messages" => "subdomain_castings#save_messages", via: :post, as: :subdomain_casting_messages, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }

  match "/website/model_castings/:id" => "subdomain_model_castings#destroy", via: :delete, as: :subdomain_model_casting, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/model_castings/:id/update_score/:score" => "subdomain_model_castings#update_score", via: :put, as: :subdomain_model_casting_update_score, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }

  match "/website/customer_requests/new" => "subdomain_customer_requests#new", via: :get, as: :subdomain_new_customer_request, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }
  match "/website/customer_requests" => "subdomain_customer_requests#create", via: :post, as: :subdomain_customer_requests, constraints: lambda { |r| r.subdomain.present? && r.subdomain != 'www' }

end
