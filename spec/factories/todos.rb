FactoryBot.define do
  factory :todo do
    title { "React" }
    due_day { 1.day.since(DateTime.current) }
  end
end