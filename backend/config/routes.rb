Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get "users/shuffle", to: 'users#shuffle'
    get "users/random", to: 'users#random'
    resources :users, :matches
  end
end
