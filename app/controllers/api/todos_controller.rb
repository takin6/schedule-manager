module Api
  class TodosController < ::Api::ApplicationController
    before_action :set_todo, only: %i[update destroy]

    def index
      @todos = Todo.all.sort_by do |todo|
        [todo.due_day]
      end
      render 'index', formats: 'json'
    end

    def create
      params = create_params

      formatted_time = DateTime.parse(params[:due_day])

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
        formatted_time = DateTime.parse(params[:due_day])
        @todo.due_day = formatted_time
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
          :due_day
        )
    end
  end
end