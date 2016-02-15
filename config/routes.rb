Marketing::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root to: 'high_voltage/pages#show', id: 'home'

  get 'contact', to: 'messages#new', as: 'contact'
  post 'contact', to: 'messages#create'

end
