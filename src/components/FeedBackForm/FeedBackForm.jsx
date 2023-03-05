import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
const options = ["good", "neutral","bad"];
class FeedBackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedback = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };
  onStateClick = (state) => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };
 

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options = {options} onLeaveFeedback = {this.onStateClick} />
        </Section>
        <Section title = "Statistics">
        {this.countTotalFeedback() > 0 ? ( <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedback()}/>) : (        <Notification message = "There is no feedback"/>
)}
       
        </Section>
      </>
    );
  }
}

export default FeedBackForm;
