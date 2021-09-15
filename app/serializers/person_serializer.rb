class PersonSerializer < ActiveModel::Serializer
  has_many :gifts 
  belongs_to :user
  
  attributes :id, :name, :image, :info, :gifts, :user

end
