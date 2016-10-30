```js
{
  currentUser : {
    id: 3,
    username: 'Travis Rice',
    thumbnail_url: 'https://asd.asd.com/321.png'
  },
  forms : {
    signUp: {},
    logIn: {},
    newComment: {errors: ["body can't be blank"]}
  },
  videos : {
    currentVideo: {
      name: 'My Video Name',
      url: 'https://www.youtube.com/...',
      description: 'really cool video, must watch',
      view_count: 234,
      rating: 5,
      categoryId: 1,
      comments: {
        1: {

        }
      },
      tags: [1, 3, 5]
    },
    categories: {
      1 : {
        name: 'snowboard',
        videos: {
          1: {} ...
        }
      },
      2 : {
        name: 'skateboard',
        videos: {
          1: {} ...
        }
      }
    },
  },
  search: {
    text: 'My Vid',
    categories: [1],
    tags: [1, 3]
  }
}
```
