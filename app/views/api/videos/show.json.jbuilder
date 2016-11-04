json.set! @video.categories[0].name do
  json.set! @video.id do
    json.partial! 'api/videos/video', video: @video
  end
end
