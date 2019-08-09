import React from 'react';

class Card extends React.Component {

  styles = {
    card: {
      border: "5px solid black",
      width: "10%"
    },
    suit: {
      position: "relative",
    },
    number: {

    }
  }
    
    render() {
    return (
            <div style={this.styles.card}>
                <span>{this.props.card[0]}</span>
                <br/>
                <span>{this.props.card[2]}</span>

            </div>
    );
  }
}
  

export default Card;