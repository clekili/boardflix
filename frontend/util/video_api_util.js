
export const fetchVideos = (success, error) => {
  $.ajax({
    type: 'get',
    url: 'videos',
    success,
    error
  });
};

export const fetchVideosWithCat = (cat, success, error) => {
  $.ajax({
    type: 'get',
    url: `videos/category=${cat}`,
    success,
    error
  });
};

export const fetchVideosWithSearchStr = (str, success, error) => {
  $.ajax({
    type: 'get',
    url: `videos/search=${str}`,
    success,
    error
  });
};

export const fetchVideo = (id, success, error) =>{
  $.ajax({
    type: 'get',
    url: `videos/${id}`,
    success,
    error
  });
};

export const createVideo = (video, success, error) =>{
  $.ajax({
    type: 'post',
    url: 'videos/',
    success,
    error
  });
};

export const updateVideo = (video, success, error) =>{
  $.ajax({
    type: 'patch',
    url: `videos/${video.id}`,
    success,
    error
  });
};

export const deleteVideo = (id, success, error) =>{
  $.ajax({
    type: 'delete',
    url: `videos/${id}`,
    success,
    error
  });
};
