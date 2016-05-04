class Mreview < ActiveRecord::Base
  belongs_to :review
  validates :comment, presence: true
end
