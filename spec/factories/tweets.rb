FactoryBot.define do
  factory :tweet do
    content { Faker::Lorem.sentence(word_count: 10) }
    likes { Faker::Number.between(from: 1, to: 5) }
    association :user
  end
end
