namespace :adhoc do
  namespace :todos do
    desc 'update'
    task :update, ['exec'] => :environment do |_task, args|
      exec = args[:exec]

      todos = Todo.all.to_a

      today_todos = todos[0..todos.length-10]

      p "uncompleted_today_todos"
      uncompleted_today_todos = today_todos[0..today_todos.length/4].map do |todo|
        p "#{todo.id}"
        todo.due_day = Time.current + 2.hour
        todo.completed = false
        todo.save!
      end
      p "========================================================================"

      p "overdue_today_todos"
      overdue_today_todos = today_todos[today_todos.length/4+1..today_todos.length/2].map do |todo|
        p "#{todo.id}"
        todo.due_day = Time.current - 1
        todo.completed = false
        todo.save!
      end
      p "========================================================================"

      p "completed_today_todos"
      completed_today_todos = today_todos[today_todos.length/2+1..today_todos.length].map do |todo|
        p "#{todo.id}"
        todo.due_day = Time.current
        todo.completed = true
        todo.save!
      end
      p "========================================================================"


      p "tomorrow_todos"
      tomorrow_todos = todos[todos.length-10..todos.length].map do |todo|
        p "#{todo.id}"
        todo.due_day = DateTime.tomorrow
        todo.completed = false
        todo.save!
      end
      p "========================================================================"
    end
  end
end
