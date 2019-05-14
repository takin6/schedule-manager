json.todos do |json|
  json.partial! partial: 'todo', collection: @todos, as: :todo
end

json.today_todos @today_todos.map(&:to_json)
json.overdue_todos @overdue_todos&.map(&:to_json)
json.tomorrow_todos @tomorrow_todos&.map(&:to_json)
json.undefined_due_day_todos @undefined_due_day_todos&.map(&:to_json)