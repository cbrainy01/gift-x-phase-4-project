class PersonSerializer < ActiveModel::Serializer
  has_many :gifts 
  has_one :user, through: :gifts
  
  attributes :id, :name, :image, :info, :gifts
end
