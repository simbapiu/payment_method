Rails.application.routes.draw do
  resources :payments, only: [:show]
  root 'payments#payment_method', as:'payment_method'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
