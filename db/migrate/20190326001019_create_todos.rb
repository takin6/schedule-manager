class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.text :title, null: false
      t.datetime :due_day, null: false

      t.timestamps
    end
  end
end
