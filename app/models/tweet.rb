class Tweet < ApplicationRecord
  belongs_to :user

  validates :content, presence: true, length: { maximum: 255 }
  validates :likes, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
end
