class RemoveFlowFromGifts < ActiveRecord::Migration[6.1]
  def change
    remove_column :gifts, :flow, :string
  end
end
