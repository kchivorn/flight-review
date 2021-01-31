class Airline < ApplicationRecord
    has_many :reviews
    
    before_create :slugify
    after_create :avg_score

    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        return 0 unless reviews.count.positive?

        avg = reviews.average(:score).to_f.round(2) * 100
        update_column(:average_score, avg)
    end
end
