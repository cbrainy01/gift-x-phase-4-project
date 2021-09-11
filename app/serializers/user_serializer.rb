class UserSerializer < ActiveModel::Serializer
  # include its relationships
  has_many :gifts

# include gifts in attributes
  attributes :id, :username, :image, :name
end
