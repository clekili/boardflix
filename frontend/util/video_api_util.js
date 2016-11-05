
export const fetchVideos = (search,
                            success,
                            error) => {
  $.ajax({
    type: 'get',
    url: `api/videos?search=${search}`,
    success,
    error
  });
};

export const fetchVideo = (id, success, error) =>{
  $.ajax({
    type: 'get',
    url: `api/videos/${id}`,
    success,
    error
  });
};

export const createVideo = (video, success, error) =>{
  $.ajax({
    type: 'post',
    url: 'api/videos/',
    data: {video},
    success,
    error
  });
};

export const updateVideo = (video, success, error) =>{
  $.ajax({
    type: 'patch',
    url: `api/videos/${video.id}`,
    data: {video},
    success,
    error
  });
};

export const deleteVideo = (id, success, error) =>{
  $.ajax({
    type: 'delete',
    url: `api/videos/${id}`,
    success,
    error
  });
};
