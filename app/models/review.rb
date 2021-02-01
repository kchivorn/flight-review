class Review < ApplicationRecord
  belongs_to :airline
  after_commit :update_airline_rating

  def update_airline_rating
    airline.avg_score
  end
end
