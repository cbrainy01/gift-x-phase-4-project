class GiftSerializer < ActiveModel::Serializer
  belongs_to :user 
  belongs_to :person
  
  attributes :id, :name, :date, :rating, :fulfilled, :incoming, :user_id, :person_id, :person_name

  # attributes :id, :temperature
  def person_name
    "#{self.object.person.name}"
  end
end
