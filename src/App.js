import "./styles.css";
import React, { useRef } from 'react';
import Reward from "react-rewards";
import { render } from "react-dom";

const config = {
  emoji: ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "⭐", "🦃"],
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
    this.reward.rewardMe()
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
    if (this.state.count < 5) return;
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  render() {
    return (
      <div className="wrapper">
        <Reward
          ref={ref => this.reward = ref}
          type="emoji"
          config={config}
        >
          <span className="happy" onClick={this.handleClick}>
            Happy Birthday!
          </span>
        </Reward>
      </div>
    );
  }
}
