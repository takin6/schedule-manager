FactoryBot.define do
  factory :todo do
    title { "React" }
    due_day { DateTime.current }
  end
end