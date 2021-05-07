import "./styles.css";
import React, { useRef } from 'react';
import Reward from "react-rewards";
import { render } from "react-dom";

const config = {
  emoji: ["🎈", "🎈", "🎈", "🎈", "🎈", "🎊", "🎉", "🎁", "⭐", "🦃"],
  elementCount: 100,
  spread: 150,
  zIndex: 9999,
  lifetime: 300
};



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    if (this.state.count > 3) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      this.setState({ 
        count: 0
      })
      return
    }
    this.reward.rewardMe()
    this.setState(prevState => {
      return { 
        count: prevState.count + 1
      }
    })
  }

  outputCakes = (count) => {
    const cakes = [];
    for (let i = 0; i < count; i++) {
      cakes.push('🎂')
    }
    return cakes.join('')
  }

  render() {
    return (
      <div className="wrapper">
        <Reward
          ref={ref => this.reward = ref}
          type="emoji"
          config={config}
        >
          <button className="happy" onClick={this.handleClick}>
            Happy Birthday!
          </button>
          <div class="cake">{this.outputCakes(this.state.count)}</div>
        </Reward>
      </div>
    );
  }
}
