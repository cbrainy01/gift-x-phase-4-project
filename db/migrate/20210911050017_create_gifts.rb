class CreateGifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.string :name
      t.date :date
      t.integer :rating
      t.boolean :fulfilled
      t.string :flow
      t.integer :person_id
      t.integer :user_id

      t.timestamps
    end
  end
end
