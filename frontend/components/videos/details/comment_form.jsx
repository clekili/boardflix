import React from 'react';

class CommentForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      type: props.ownComment ? 'update' : 'create',
      id: props.ownComment ? props.ownComment.id : null,
      body: props.ownComment ? props.ownComment.body : '',
      user_id: props.userId,
      video_id: props.videoId,
      showForm: false
    };

    this.displayForm = this.displayForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  render(){
    if(this.state.showForm)
      return this.renderForm();
    else
      return this.renderButton();
  }

  renderButton(){
    return (
      <button onClick={this.displayForm(true)}>Review</button>
    );
  }

  renderForm(){
    // if(this.state.type === 'update'){
    // } else {
    // }
    return (
      <div>
        Form here
        <button onClick={this.displayForm(false)}>Button</button>
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
