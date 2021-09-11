class GiftSerializer < ActiveModel::Serializer
  belongs_to :user 
  
  attributes :id, :name, :date, :rating, :fulfilled, :incoming 
end
