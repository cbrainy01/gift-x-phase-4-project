class Gift < ApplicationRecord
    belongs_to :user 
    belongs_to :person

    validates :name, presence: true, length: {maximum: 50}
    validates :user_id, presence: true 
    validates :person_id, presence: true 
    validates :fulfilled, inclusion: [true, false]
    validates :incoming, inclusion: [true, false]
    validates :rating, :inclusion => 0..10, allow_nil: true
end 
