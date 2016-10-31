# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
is_admin        | boolean   | default: false

## videos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
youtube_url     | string    | not null
description     | text      | not null
view_count      | integer   | not null, default: 0
rating          | integer   | not null, default: 5

## categorization
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
video_id        | integer   | not null, indexed
category_id     | integer   | not null, indexed

## categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
video_id        | integer   | not null, indexed
rating          | integer   | not null
body            | string    | not null

## tags (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique

## video_taggings (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
tag_id          | integer   | not null. indexed
video_id        | integer   | not null, indexed

## user_fav_taggings (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
tag_id          | integer   | not null. indexed
user_id         | integer   | not null, indexed
