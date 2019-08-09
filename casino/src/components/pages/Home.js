import React from 'react';
import doc from 'deck-o-cards';
import Card from '../card/card'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            playerHand: []
        }
    }

    componentWillMount = () => {
        this.setState({ deck: doc.randomizedDeck() })
    }

    deal = () => {
        let card = this.state.deck.pop([Math.floor(Math.random() * this.state.deck.length)])
        console.log(card)
        let newHand = this.state.playerHand.concat([card]);
        this.setState({ playerHand: newHand, dealt: true })
    }



    render() {

        return (
            <div>
                <h1>George's Casino</h1>
                <button onClick={() => this.deal()}>Draw Card</button>
                {this.state.dealt ?
                    this.state.playerHand.map(card => {
                        return <Card card={card} />
                    })
                     :
                    <div></div>}
            </div>
        )
    }
}

export default Home;