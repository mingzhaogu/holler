Rails.application.routes.draw do

  namespace :api do
    get 'conversations/new'
  end

  namespace :api do
    get 'conversations/create'
  end

  namespace :api do
    get 'conversations/index'
  end

  namespace :api do
    get 'conversations/show'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:new, :create, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
end
