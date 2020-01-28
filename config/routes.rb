Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :watch_lists, only: [:create, :index, :destroy]
    resources :movies, only: [:index, :show]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :lists, only: [:create, :index, :destroy]
  end

  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
