import "./styles.css";
import Reward from "react-rewards";

const config = {
  emoji: ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "⭐"],
  elementCount: 100,
  spread: 150,
  zIndex: 9999,
  lifetime: 300
};

export default function App() {
  return (
    <div className="wrapper">
      <Reward
        className="reward"
        ref={(ref) => {
          this.reward = ref;
        }}
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
