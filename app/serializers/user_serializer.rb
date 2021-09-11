class UserSerializer < ActiveModel::Serializer
  # include its relationships
  has_many :gifts
  has_many :people, through: :gifts

# include gifts in attributes
  attributes :id, :username, :image, :name
end
