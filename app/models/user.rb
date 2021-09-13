class User < ApplicationRecord
    has_many :gifts
    has_many :people
    # has_many :people, through: :gifts 
    
    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {maximum: 60}
    validates :name, presence: true, length: {maximum: 50}
end
