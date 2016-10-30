# API Endpoints

## HTML API

### Root
  * `GET /` - loads React web app

## JSON API

### Users
  * [ ] `POST /api/users` - creates a user
  * [ ] `GET /api/users/:id` - fetches a user
  * [ ] `PATCH /api/users/:id` - updates a user
  * [ ] `DELETE /api/users/:id` - deletes a user

### Session
  * [ ] `POST /api/session` - creates session(login)
  * [ ] `DELETE /api/session` - destroys session(logout)

### Videos
  * [ ] `GET /api/videos`
    * videos index
    * accepts query param to list videos by category
    * accepts query param to search by name
  * [ ] `GET /api/videos/:id` - gets a particular video

### Comments
  * [ ] `GET /api/videos/:video_id/comments` - lists all comments of a video
  * [ ] `POST /api/videos/:video_id/comments` - creates a new comment to a video
  * [ ] `PATCH /api/comments/:comment_id` - updates a comment
  * [ ] `DELETE /api/comments/:comment_id` - deletes a comment
