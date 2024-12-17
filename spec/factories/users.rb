FactoryBot.define do
  factory :user do
    email { "test@example.com" }
    password { "Password1$" }
    password_confirmation { "Password1$" }
  end
end
