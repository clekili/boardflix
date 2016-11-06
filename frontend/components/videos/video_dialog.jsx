import React from 'react';
import {Link, hashHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class VideoDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      errors: props.errors,
      categories: props.categories,
      dialogType: props.dialogType,
      video: props.video
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleChange(field){
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

  handleClose(){
    this.setState({show: false});
  }

  handleOpen(){
    this.setState({show: true});
  }

  render(){
    let btnText, dialogBtn;
    if(this.props.dialogType === "create"){
      btnText = "Create Video";
      dialogBtn =  <RaisedButton
                          label={btnText}
                          onTouchTap={this.handleOpen}
                      />;
      }else {
      btnText = "Edit";
      dialogBtn = <button onClick={this.handleOpen}>
                      {btnText}
                  </button>;
      }

    if(this.props.isAdmin){
      return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div className="videoDialogBtn">
              {dialogBtn}
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div className='videoDialog'>
              <Dialog
                open={this.state.show}
                modal={false}
                onRequestClose={this.handleClose}>
              <div>
                <ul className='errors'>
                  {this.state.errors.map( (error, idx) => (
                    <li key={idx} className='error_item'>{error}</li>
                  ))}
                </ul>

                <form onSubmit={this.handleSubmit}>
                  <TextField
                    hintText="Title"
                    floatingLabelText="Title"
                    value={this.state.video.name}
                    onChange={this.handleChange('name')}
                    fullWidth={true}
                  />
                <br/>
                  <TextField
                    hintText="Youtube Id"
                    floatingLabelText="Youtube Id"
                    value={this.state.video.youtube_id}
                    onChange={this.handleChange('youtube_id')}
                    fullWidth={true}
                  />
                <br/>
                  <SelectField
                    floatingLabelText="Category"
                    value={this.state.video.category}
                    onChange={this.handleChange('category')}
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
                    onChange={this.handleChange('description')}
                    fullWidth={true}
                  />
                <br/>
                  <RaisedButton label={btnText}
                                type="submit"
                                className="videoSubmitBtn"
                   />
                </form>
                </div>
              </Dialog>
          </div>
          </MuiThemeProvider>
        </div>
      );
    }
    return null;
  }
}

export default VideoDialog;
