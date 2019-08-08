import React from 'react';

class Card extends React.Component {
    
    render() {
    return (
            <div >
                <span>{this.props.card}</span>
            </div>
    );
  }
}
  

export default Card;