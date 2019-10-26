Rails.application.routes.draw do
<<<<<<< Updated upstream
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
=======

  devise_for :users
  root to: 'groups#index'
  resources :users, only: [:imdex, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index]
  end
>>>>>>> Stashed changes
end
