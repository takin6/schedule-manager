class HomeController < ApplicationController
  around_action :hypernova_render_support

  def index
    @todos = Todo.all.sort_by do |todo|
      [todo.due_day]
    end
    @todos = TodoDecorator.decorate_collection(@todos)
    @today_todos = TodoDecorator.decorate_collection(Todo.today_todos(@todos))
    @overdue_todos = TodoDecorator.decorate_collection(Todo.overdue_todos(@todos))
    @tomorrow_todos = TodoDecorator.decorate_collection(Todo.tomorrow_todos(@todos))
    @due_undefined_todos = TodoDecorator.decorate_collection(Todo.due_undefined_todos(@todos))
  end
end
