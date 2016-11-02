
export const fetchVideos = (category,
                            search,
                            success,
                            error) => {
  $.ajax({
    type: 'get',
    url: `videos/category=${category}&search=${search}`,
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
