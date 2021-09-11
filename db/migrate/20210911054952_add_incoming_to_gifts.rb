class AddIncomingToGifts < ActiveRecord::Migration[6.1]
  def change
    add_column :gifts, :incoming, :boolean
  end
end
