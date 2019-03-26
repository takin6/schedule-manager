json.todos do |json|
  json.partial! partial: 'todo', collection: @todos, as: :todo
end
