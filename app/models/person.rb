class Person < ApplicationRecord
    has_many :gifts 
    has_one :user, through: :gifts 
    
    validates :name, presence: true, length: {maximum: 50}
    validates :info, length: {maximum: 750}
end
