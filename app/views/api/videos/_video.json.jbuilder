json.id video.id
json.name video.name
json.url video.youtube_url
json.description video.description
json.viewCount video.view_count
json.rating video.rating
unless video.categories.empty?
  json.categoryId video.categories[0].id
end
