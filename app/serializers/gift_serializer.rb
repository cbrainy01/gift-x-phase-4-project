class GiftSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :rating, :fulfilled, :incoming 
  
end
