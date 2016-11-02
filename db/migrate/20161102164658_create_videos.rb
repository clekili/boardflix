class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name, null: false
      t.string :youtube_url, null: false
      t.text :description
      t.integer :view_count, default: 0
      t.integer :rating, default: 0

      t.timestamps null: false
    end

    add_index :videos, :name, unique: true
  end
end
