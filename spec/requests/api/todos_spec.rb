require 'rails_helper'

RSpec.describe 'Todos', type: :request do
  let(:json) { JSON.parse(response.body, { symbolize_names: true }) }
  describe "GET /todos" do
    context "displays todos" do
      before do
        2.times { create(:todo) }
      end

      it do
        get api_todos_path
        expect(response).to have_http_status(200)
        expect(json[:todos].size).to eq(2)
        expect(json[:todos][0][:title]).to eq "React"
        expect(json[:todos][0][:formatted_due_day]).to eq 1.day.since(Date.current).strftime('%Y-%m-%d')
      end
    end
  end

  describe "POST /todos" do
    context "create a todo" do
      let(:params) do
        {
          todo: {
            title: "Redux",
            due_day: 3.days.since(DateTime.current)
          }
        }
      end

      it do
        expect do
          post api_todos_path, params: params
        end.to change(
          Todo, :count
        ).by(1)

        expect(response).to have_http_status(200)
        expect(json[:todo][:title]).to eq "Redux"
      end
    end
  end

end