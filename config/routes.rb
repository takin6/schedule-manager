Rails.application.routes.draw do

  namespace :api do
    resources :todos, only: %w[index create]
  end
end
