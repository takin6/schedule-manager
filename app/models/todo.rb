class Todo < ApplicationRecord
  validates :title, presence: true
  validates :due_day, presence: true

  def formatted_due_day
    self.due_day.strftime('%Y-%m-%d %H:%M')
  end
end
