class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  has_many :tweets, dependent: :destroy

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  validates :password_confirmation, presence: { message: "Password confirmation is required" }
  validates :email, presence: { message: "Email is required" }, uniqueness: { case_sensitive: true, message: "Email already in use" }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Email must be in a valid format" }
  validate :password_rules, if: -> { password.present? }

  private
  def password_rules
    unless password =~ /[^a-zA-Z0-9]/
      errors.add(:password, "Must contain at least one of symbols (!@#$%^&*)")
    end

    if password =~ /(.)\1\1/
      errors.add(:password, "Cannot contain the same character more than two times")
    end
  end
end
