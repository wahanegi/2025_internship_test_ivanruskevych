class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         # :confirmable

  # validates :password, length: { minimum: 6, maximum: 20 }, presence: true, uniqueness: {case_sensitive: false}
  # validates :password_confirmation, presence: true
end
