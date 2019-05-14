class Todo < ApplicationRecord
  validates :title, presence: true
  validates :due_day, presence: true

  def formatted_due_day
    self.due_day&.strftime('%Y-%m-%d %H:%M')
  end

  def formatted_due_time
    self.due_day&.strftime('%H:%M')
  end

  def self.today_todos(todos)
    return todos.select { |todo| todo.due_day.strftime('%Y-%m-%d') == DateTime.current.strftime('%Y-%m-%d') }
  end  

  def self.overdue_todos(todos)
    return todos.select { |todo| DateTime.current > todo.due_day }
  end
  
  def self.tomorrow_todos(todos)
    return todos.select { |todo| todo.due_day.strftime('%Y-%m-%d') == DateTime.tomorrow.strftime('%Y-%m-%d') }
  end
  
  def self.due_undefined_todos(todos)
    return todos.select { |todo| !todo.due_day.present? }
  end
end
