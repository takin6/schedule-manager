module Api
  class TodosController < ::Api::ApplicationController
    def index
      @todos = Todo.all.sort_by do |todo|
        [todo.due_day]
      end
      render 'index', formats: 'json'
    end

    def create
      params = create_params
      if @todo = Todo.create!(title: params[:title], due_day: params[:due_day])
        render 'show', formats: 'json'
      else
        render json: { errors: ["something happened"] }, status: :unprocessable_entity
      end
    end

    private

    def create_params
      params
        .require(:todo)
        .permit(
          :title,
          :due_day
        )
    end
  end
end