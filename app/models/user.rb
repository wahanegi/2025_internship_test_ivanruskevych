class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  validate :password_validation

  private
  def password_validation
    return if password.blank? || password.match?(/\d/)
      errors.add :password, "must contain at least one digit."
    end
  end
