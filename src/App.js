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
      count: 0,
      opacity: 0.25,
      shadowSpread: 0
    }
    this.styles = {
      boxShadow: `0 8px 32px ${this.state.shadowSpread} hsla(236, 63%, 33%, ${this.state.opacity})`,
      background: `hsla(0, 0%, 100%, ${this.state.opacity})`
    }
  }

  handleClick = () => {
    if (this.state.count > 3) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      this.setState({ 
        count: 0,
        opacity: 0.5,
        shadowSpread: 0
      })
      return
    }
    this.reward.rewardMe()
    this.setState(prevState => {
      return { 
        count: prevState.count + 1,
        opacity: prevState.opacity + 0.2,
        shadowSpread: prevState.shadowSpread + 1
      }
    })

  }

  render() {
    return (
      <div className="wrapper">
        <Reward
          ref={ref => this.reward = ref}
          type="emoji"
          config={config}
        >
          <button style={this.styles} className="happy" onClick={this.handleClick}>
            Happy Birthday!
          </button>
        </Reward>
      </div>
    );
  }
}
