import React from 'react';

const ReviewItem = ({comment}) => (
  <div className='reviewItem'>
    Rating : {comment.rating}
    <br/>
    {comment.body}
  </div>
);

export default ReviewItem;
