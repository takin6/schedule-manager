Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    resources :todos, only: %w[index create update destroy]
  end
end
