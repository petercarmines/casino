import React from 'react';
import doc from 'deck-o-cards';
import Card from '../card/card'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: []
        }
    }

    componentWillMount = () => {
        this.setState({ deck: doc.randomizedDeck() })
    }

    deal = () => {
        let card = this.state.deck.pop([Math.floor(Math.random() * this.state.deck.length)])
        this.setState({ card: card, dealt: true })
    }



    render() {

        return (
            <div>
                <h1>George's Casino</h1>
                <button onClick={() => this.deal()}></button>
                
                {this.state.dealt ? <Card card={this.state.card} /> : <div></div>}
            </div>
        )
    }
}

export default Home;