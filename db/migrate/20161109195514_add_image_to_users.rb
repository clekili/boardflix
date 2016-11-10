class AddImageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :string, default: 'https://goo.gl/0Q86qw'
  end
end
