// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {face: 'heads', totalCount: 0, headCount: 0, tailsCount: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const newFace = tossResult === 0 ? 'heads' : 'tails'

    this.setState(prevState => ({
      face: newFace,
      totalCount: prevState.totalCount + 1,
      headCount:
        newFace === 'heads' ? prevState.headCount + 1 : prevState.headCount,
      tailsCount:
        newFace === 'tails' ? prevState.tailsCount + 1 : prevState.tailsCount,
    }))
  }

  render() {
    const {face, totalCount, headCount, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="image-container">
            <img
              src={
                face === 'heads'
                  ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
              }
              alt="toss result"
              className="image"
            />
          </div>
          <div className="btn-container">
            <button className="button" type="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
