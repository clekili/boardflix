json.id video.id
json.name video.name
json.youtube_id video.youtube_id
json.description video.description
json.viewCount video.view_count
json.rating video.rating
unless video.categories.empty?
  json.category video.categories[0].name
end
