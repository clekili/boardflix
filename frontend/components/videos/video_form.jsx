import React from 'react';
import {Link, hashHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class VideoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      video: {
        name: "",
        youtube_id: "",
        category: "",
        description: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return (e, index, value) => {
      let val = value || e.target.value;
      this.state.video[field] = val;
      this.setState(this.state);
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.dialogType === 'create')
      this.props.create(this.state.video);
    else
      this.props.update(this.state.video);
  }


  render(){
    let btnText;
    if(this.props.dialogType === "create")
      btnText = "Create Video";
    else
      btnText = "Update Video";

    return (
      <div className='videoForm'>
        <div>
          <ul className='errors'>
            {this.props.errors.map( (error, idx) => (
              <li key={idx} className='error_item'>{error}</li>
            ))}
          </ul>

          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Title"
              floatingLabelText="Title"
              value={this.state.video.name}
              onChange={this.update('name')}
              fullWidth={true}
            />
          <br/>
            <TextField
              hintText="Youtube Id"
              floatingLabelText="Youtube Id"
              value={this.state.video.youtube_id}
              onChange={this.update('youtube_id')}
              fullWidth={true}
            />
          <br/>
            <SelectField
              floatingLabelText="Category"
              value={this.state.video.category}
              onChange={this.update('category')}
              fullWidth={true}
            >
              {this.props.categories.map( (cat, i) => (
                <MenuItem key={i} value={cat} primaryText={cat} />
              )) }
            </SelectField>
          <br/>
            <TextField
              floatingLabelText="Description"
              multiLine={true}
              rows={4}
              value={this.state.video.description}
              onChange={this.update('description')}
              fullWidth={true}
            />
          <br/>
            <FlatButton label={btnText}
                        type="submit"
                        />
          </form>
          </div>
      </div>
    );
  }
}

export default VideoForm;
