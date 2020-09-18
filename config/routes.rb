Rails.application.routes.draw do
  resources :comments
  resources :articles do
    resources :comments, only: [:create, :index]
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
