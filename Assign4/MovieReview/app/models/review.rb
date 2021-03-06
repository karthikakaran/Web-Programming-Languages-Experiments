class Review < ActiveRecord::Base
 has_many :mreviews, dependent: :destroy
 validates :movietitle, presence: true
 validates :rating, presence: true
 validates :rating, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 10, :message => " should be between 0 and 10"}
end
