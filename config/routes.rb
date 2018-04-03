Rails.application.routes.draw do

  namespace :api do
    resources :user, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
