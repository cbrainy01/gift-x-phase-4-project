class Gift < ApplicationRecord
    belongs_to :user 
    belongs_to :person

    validates :name, presence: true, length: {maximum: 50}
    validates :rating, :inclusion => 0..10
end 
