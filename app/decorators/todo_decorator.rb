class TodoDecorator < Draper::Decorator
  delegate_all

  def to_json
    {
      id: object.id,
      title: object.title,
      due_day: object.due_day,
      formatted_due_day: object.formatted_due_day,
      formatted_due_time: object.formatted_due_time
    }
  end
end