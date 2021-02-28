Rails.application.routes.draw do

  get 'tinies/random', to: 'tinies#random'

  resources :tinies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
