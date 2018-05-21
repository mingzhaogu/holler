Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :edit, :update]
    resource :session, only: [:create, :destroy]
    resources :conversations do
      resources :messages, only: [:new, :create, :show, :index]
    end
  end

  root to: "static_pages#root"
end
