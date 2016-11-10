# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161109195514) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "categorizations", force: :cascade do |t|
    t.integer  "video_id",    null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "categorizations", ["category_id"], name: "index_categorizations_on_category_id", using: :btree
  add_index "categorizations", ["video_id"], name: "index_categorizations_on_video_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "video_id",               null: false
    t.integer  "rating",     default: 0, null: false
    t.text     "body",                   null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree
  add_index "comments", ["video_id"], name: "index_comments_on_video_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                          null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
    t.boolean  "is_admin",        default: false
    t.string   "image",           default: "https://goo.gl/0Q86qw"
  end

  create_table "videos", force: :cascade do |t|
    t.string   "name",                    null: false
    t.string   "youtube_id",              null: false
    t.text     "description"
    t.integer  "view_count",  default: 0
    t.integer  "rating",      default: 0
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "videos", ["name"], name: "index_videos_on_name", unique: true, using: :btree

end
