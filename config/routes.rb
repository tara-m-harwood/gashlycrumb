Rails.application.routes.draw do

  
  get 'tinies/random/:zero', to: 'tinies#random'

  get 'tinies/show_by_letter/:letter', to: 'tinies#show_by_letter'

  get 'tinies/show_by_number/:id', to: 'tinies#show_by_number'

  resources :tinies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
end
