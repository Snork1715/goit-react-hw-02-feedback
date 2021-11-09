import React, { Component } from "react";
import Statistic from "./components/Statistic";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (btnType) => {
    this.setState((prevState) => ({
      [btnType]: prevState[btnType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.neutral + this.state.good + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0
      ? Math.ceil((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    return (
      <div className="feedback-wrapper">
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            types={["good", "neutral", "bad"]}
            onIncrement={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalCount={this.countTotalFeedback()}
              goodPercnt={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
