class Gift < ApplicationRecord
    belongs_to :user 
    belongs_to :person

    validates :name, presence: true, length: {maximum: 50}
    validates :user_id, presence: true 
    validates :person_id, presence: true 
    validates :fulfilled, presence: true 
    validates :incoming, presence: true 
    validates :rating, :inclusion => 0..10
end 
