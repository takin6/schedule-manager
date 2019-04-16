# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

titles = %w(react redux oracle_database)
titles.each.with_index do |title, index|
  num = 7 + index+1
  Todo.create!(title: title, due_day: num.days.since(Date.current))
end
