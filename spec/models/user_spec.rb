require "rails_helper"

describe User, type: :model do
  context "Relations rules" do
    it { should have_many(:tweets) }
  end

  context "Password rules" do
    it "Password does not contains a symbol" do
      user = build(:user, password: "Password1", password_confirmation: "Password1")
      expect(user.valid?).to be false
      expect(user.errors[:password]).to include("Must contain at least one of symbols (!@#$%^&*)")
    end

    it "Password contain the same character more than two times" do
      user = build(:user, password: "Passsword$1", password_confirmation: "Passsword$1")
      expect(user.valid?).to be false
      expect(user.errors[:password]).to include("Cannot contain the same character more than two times")
    end

    it "Password contains a symbol & does not repeat the same character more than two times" do
      user = build(:user, password: "Password$1", password_confirmation: "Password$1")
      expect(user.valid?).to be true
    end
  end

  context "Email rules" do
    it "Email has to be unique" do
      email = Faker::Internet.unique.email
      create(:user, email: email)
      user = build(:user, email: email)
      expect(user.valid?).to be false
      expect(user.errors[:email]).to include("Email already in use")
    end

    it "Email must be in a valid format" do
      user = build(:user, email: "email_not_valid")
      expect(user.valid?).to be false
      expect(user.errors[:email]).to include("Email must be in a valid format")
    end
  end

  context "Presence rules" do
    it "Not valid without an email" do
      user = build(:user, email: nil)
      expect(user.valid?).to be false
      expect(user.errors[:email]).to include("Email is required")
    end

    it "Not valid without a password_confirmation" do
      user = build(:user, password_confirmation: nil)
      expect(user.valid?).to be false
      expect(user.errors[:password_confirmation]).to include("Password confirmation is required")
  end
  end
end
