import React from 'react';
import ReviewItem from '../videos/details/review_item';
import Stars from '../videos/details/stars';

const UserReviews = (props) => (
  <div className='userReviews'>
    <h2>My Reviews</h2>
    <div>
      {props.comments.map( (comment, idx) => (
        <div key={idx} className='review'>
            <h3>{comment.video_name}</h3>
            <Stars rating={comment.rating}/>
            <p>{comment.body}</p>
        </div>
      ))}
    </div>
  </div>
);


export default UserReviews;
