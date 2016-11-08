import React from 'react';
import Stars from './stars';

const ReviewItem = ({comment}) => (
  <div className='reviewItem'>
    <Stars rating={comment.rating}/>
    <p>{comment.body}</p>
  </div>
);

export default ReviewItem;
