require "rails_helper"

RSpec.describe do
  context "Password rules" do
    it "Password does not contains a symbol" do
      user = User.new(password: "Password1", password_confirmation: "Password1")
      expect(user.valid?).to be false
      expect(user.errors[:password]).to include("Must contain at least one of symbols (!@#$%^&*)")
    end

    it "Password contain the same character more than two times" do
      user = User.new(password: "Passsword$1", password_confirmation: "Passsword$1")
      expect(user.valid?).to be false
      expect(user.errors[:password]).to include("Cannot contain the same character more than two times")
    end

    it "Password contains a symbol & does not repeat the same character more than two times" do
      user = User.new(password: "Password$1", password_confirmation: "Password$1")
      # puts user.errors.full_messages
      expect(user.valid?).to be true
    end
  end
end
