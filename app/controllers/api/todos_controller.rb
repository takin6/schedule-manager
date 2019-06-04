module Api
  class TodosController < ::Api::ApplicationController
    before_action :set_todo, only: %i[update destroy]

    def index
      @todos = Todo.all.sort_by do |todo|
        [todo.due_day]
      end
      @today_todos = TodoDecorator.decorate_collection(Todo.today_todos(@todos))
      @overdue_todos = TodoDecorator.decorate_collection(Todo.overdue_todos(@todos))
      @tomorrow_todos = TodoDecorator.decorate_collection(Todo.tomorrow_todos(@todos))
      @due_undefined_todos = TodoDecorator.decorate_collection(Todo.due_undefined_todos(@todos))

      render 'index', formats: 'json'
    end

    def create
      params = create_params

      formatted_time = Time.zone.parse(params[:due_day])

      if @todo = Todo.create!(title: params[:title], due_day: formatted_time)
        render 'show', formats: 'json'
      else
        render json: { errors: ["something happened"] }, status: :unprocessable_entity
      end
    end

    def update
      params = create_params

      if params[:title]
        @todo.title = params[:title]
      end

      if params[:due_day]
        formatted_time = Time.zone.parse(params[:due_day])
        @todo.due_day = formatted_time
      end

      if params[:completed].is_a?(FalseClass) || params[:completed].is_a?(TrueClass)
        @todo.completed = params[:completed]
      end

      if @todo.save!
        render 'show', formats: 'json'
      else
        render json: { errors: ["something happened"] }, status: :unprocessable_entity
      end
    end

    def destroy
      if @todo.destroy!
        render 'show', formats: 'json'
      else
        render json: { errors: ["something happened"] }, status: :unprocessable_entity
      end
    end

    private

    def set_todo
      @todo = Todo.find(params[:id])
    end

    def create_params
      params
        .require(:todo)
        .permit(
          :title,
          :due_day,
          :completed
        )
    end
  end
end