class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  has_many :tweets

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  validates :password_confirmation, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: true }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email format" }
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
