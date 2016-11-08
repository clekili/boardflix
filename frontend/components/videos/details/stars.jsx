import React from 'react';


class Stars extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rating: props.rating
    };

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.renderStar = this.renderStar.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({rating: nextProps.rating});
  }

  handleHoverOn(e){
    e.preventDefault();
    let rating = parseInt($(e.currentTarget).attr('name'));

    this.setState({rating: rating});
  }

  handleHoverOff(e){
    e.preventDefault();
    this.setState({rating: this.props.rating});
  }

  renderStar(num){
    let color = this.state.rating >= num ? 'starRed' : "" ;
    if(this.props.active){
      return (
        <div className={"star " + color}
           name={num}
           onMouseEnter={this.handleHoverOn}
           onMouseLeave={this.handleHoverOff}
           onClick={this.props.setRating(num)}>
           &#9733;
        </div>
      );
    } else {
      return (
        <div className={"star " + color}>
           &#9733;
        </div>
      );
    }
  }

  render(){
    return (
      <div className='stars'>
        <ul>
        { [1,2,3,4,5].map( num => <li key={num}>{this.renderStar(num)}</li> ) }
        </ul>
      </div>
    );
  }
}

export default Stars;
