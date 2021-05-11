import "./styles.css";
import React from 'react';
import Reward from "react-rewards";

const config = {
  emoji: ['🎈', '🎊', '🎉', '🎁', '⭐', '🦃'],
  elementCount: 100,
  spread: 150,
  zIndex: 9999,
  lifetime: 300
};

// Make non 🎈 emoji more rare
for (let i = 0; i < 25; i++) {
  config.emoji.push('🎈')
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      cakes: []
    }
  }

  addCake = () => {
    this.setState(prevState => {
      return {cakes: ['🎂', ...prevState.cakes]}
    })
  }

  increaseCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  handleClick = () => {
    // Reset after 3
    if (this.state.count > 3) {
      // Special bonus
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

      this.setState({count: 0})
      return
    }

    // Blast Confetti
    this.reward.rewardMe()

    this.addCake()
    this.increaseCount()
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
          <div className="cake">{this.state.cakes.join('')}</div>
        </Reward>
      </div>
    );
  }
}
