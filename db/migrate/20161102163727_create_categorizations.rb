class CreateCategorizations < ActiveRecord::Migration
  def change
    create_table :categorizations do |t|
      t.integer :video_id, null: false
      t.integer :category_id, null: false

      t.timestamps null: false
    end
    add_index :categorizations, :video_id
    add_index :categorizations, :category_id
  end
end
