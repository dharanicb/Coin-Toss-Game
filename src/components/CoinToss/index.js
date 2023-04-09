import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {totalScore: 0, heads: 0, tails: 0, isHead: true}

  onChangeHead = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(PrevState => ({
        isHead: true,
        totalScore: PrevState.totalScore + 1,
        heads: PrevState.heads + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(PrevState => ({
        isHead: false,
        totalScore: PrevState.totalScore + 1,
        tails: PrevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, heads, tails, totalScore} = this.state
    const imageUrls = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="Card-container">
          <h1 className="Heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrls} alt="toss result" className="head-img" />
          <button type="button" onClick={this.onChangeHead}>
            Toss Coin
          </button>
          <div className="description-container">
            <p className="count">total: {totalScore}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
