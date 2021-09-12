class Person < ApplicationRecord
    has_many :gifts 
    belongs_to :user 
    
    
    validates :name, presence: true, length: {maximum: 50}
    validates :info, length: {maximum: 750}
end
