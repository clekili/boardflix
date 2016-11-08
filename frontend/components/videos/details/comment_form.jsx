import React from 'react';
import Stars from './stars';
import { merge } from 'lodash';

class CommentForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      type: props.ownComment ? 'update' : 'create',
      id: props.ownComment ? props.ownComment.id : null,
      body: props.ownComment ? props.ownComment.body : '',
      rating: props.ownComment ? props.ownComment.rating : 0,
      user_id: props.userId,
      video_id: props.videoId,
      showForm: false
    };

    this.displayForm = this.displayForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.setRating = this.setRating.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitAction = this.submitAction.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let newState = {
      type: nextProps.ownComment ? 'update' : 'create',
      id: nextProps.ownComment ? nextProps.ownComment.id : null,
      body: nextProps.ownComment ? nextProps.ownComment.body : '',
      rating: nextProps.ownComment ? nextProps.ownComment.rating : 0,
      user_id: nextProps.userId,
      video_id: nextProps.videoId
    };
    this.setState(newState);
  }

  setRating(value){
    return (e) => {
      e.preventDefault();
      this.setState({rating: value});
    };
  }

  updateBody(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  render(){
    let body;
    if(this.state.showForm)
      body = this.renderForm();
    else
      body = this.renderButton();

    return (
      <section className='commentFormSection'>
        {body}
      </section>
    );
  }

  renderButton(){
    return (
      <button
        className='commentButton'
        onClick={this.displayForm(true)}>
        Review
      </button>
    );
  }

  submitAction(e){
    e.preventDefault();
    this.displayForm(false);

    let comment = merge({}, this.state);
    delete comment.type;
    delete comment.showForm;

    if(this.state.type === 'update')
      this.props.updateComment(comment);
    else
      this.props.createComment(comment);
  }

  renderForm(){
    let deleteButton;
    let submitText = 'Post Review';
    if(this.state.type === 'update'){
      submitText = 'Update Review';
      deleteButton = <button
                onClick={ e => this.props.deleteComment(this.state.id)}>
                  Delete
                </button>;
    }

    return (
      <div className='commentForm'>
        <Stars rating={this.state.rating}
               setRating={this.setRating}
               active={true}/>
             <label htmlFor='commentFormBody'>Review</label>
        <textarea
            rows='10'
            value={this.state.body}
            onChange={this.updateBody}
            id='commentFormBody'
        />
        <br/>
        <button onClick={this.submitAction}>{submitText}</button>
        {deleteButton}
        <button onClick={this.displayForm(false)}>Cancel</button>
      </div>
    );
  }

  displayForm(value){
    return (e) => {
      e.preventDefault();
      this.setState({showForm: value});
    };
  }
}

export default CommentForm;
