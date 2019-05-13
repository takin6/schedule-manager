class AddColumnToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :completed, :boolean, null: false, default: false
  end
end
