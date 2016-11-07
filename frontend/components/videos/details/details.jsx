import React from 'react';
import ReviewItem from './review_item';
import CommentFormContainer from './comment_form_container';

class Details extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    return (<div className='details'>
              <h1>Details of {this.props.video.name}</h1>
              <h2>Member Reviews</h2>
              {this.props.comments.map( comment => (
                <ReviewItem key={comment.id}
                            className="inlineReview"
                            comment={comment}/>
              ))}
              <button>Read more...</button>

              <CommentFormContainer video={this.props.video}/>
            </div>
    );
  }
}
export default Details;
