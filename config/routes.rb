Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index]
    resource :session, only: [:create, :destroy]
    resources :conversations do
      resources :messages, only: [:new, :create, :show]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
end
