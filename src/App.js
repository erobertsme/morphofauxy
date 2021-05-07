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
  }
  
  render() {
    return (
      <div className="wrapper">
        <Reward
          ref={ref => this.reward = ref}
          type="emoji"
          config={config}
        >
          <span className="happy" onClick={() => this.reward.rewardMe()}>
            Happy Birthday!
          </span>
        </Reward>
      </div>
    );
  }
}
