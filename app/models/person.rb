class Person < ApplicationRecord
    has_many :gifts, dependent: :destroy
    belongs_to :user 
    
    # add uniqueness validation
    validates :name, presence: true, length: {maximum: 50}
    validates :info, length: {maximum: 750}
end
