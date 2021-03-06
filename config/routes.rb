Rails.application.routes.draw do

  
  get 'tinies/random/:zero', to: 'tinies#random'

  get 'tinies/show_by_letter/:letter', to: 'tinies#show_by_letter'

  resources :tinies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
end
