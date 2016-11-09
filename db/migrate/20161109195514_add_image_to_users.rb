class AddImageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :string, default: 'https://goo.gl/OYFUI1'
  end
end
