import React from 'react';
import ReviewItem from './review_item';
import CommentFormContainer from './comment_form_container';
import CommentsDialog from './comments_dialog';

class Details extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    return (<div className='detailsPane'>
              <div className='details'>
                <h1>{this.props.video.name}</h1>
                <h2>Member Reviews</h2>
                <div className='reviewsDisplay'>
                  {this.props.comments.map( comment => (
                    <ReviewItem key={comment.id}
                                className="inlineReview"
                                comment={comment}/>
                  ))}
                </div>
                <CommentsDialog comments={this.props.comments}/>
              </div>
              <CommentFormContainer video={this.props.video}/>
            </div>
    );
  }
}
export default Details;
