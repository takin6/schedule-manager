class HomeController < ApplicationController
  around_action :hypernova_render_support

  def index
    @todos = Todo.all
  end
end
