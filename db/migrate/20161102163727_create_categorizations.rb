class CreateCategorizations < ActiveRecord::Migration
  def change
    create_table :categorizations do |t|
      t.string :video_id, null: false
      t.string :category_id, null: false

      t.timestamps null: false
    end
    add_index :categorizations, :video_id, unique: true
    add_index :categorizations, :category_id, unique: true
  end
end
