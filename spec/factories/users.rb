FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }

    password do
      Faker::Internet.password(
        min_length: 8,
        max_length: 16,
        mix_case: true,
        special_characters: true
      ).gsub(/(.)\1\1/, 'A@b1!')
    end
    password_confirmation { password }

    after(:build) { |user| user.skip_confirmation! }
  end
end
