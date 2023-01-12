import React from "react";
import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export function App () {
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);
 
  const handleIncrement = options => {
    switch (options) {
      case 'good':
        setGoodValue(good => good + 1);
        break;
      case 'neutral':
        setNeutralValue(neutral => neutral + 1);
        break;
      case 'bad':
        setBadValue(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    const percentage = Math.round((good / value) * 100);

    if (!percentage) return 0;
    return percentage;
  }

  const optionName = ['good', 'neutral', 'bad'];
  const value = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  
     return(
       <>
         <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionName}
            onLeaveFeedback={handleIncrement}
          />
         </Section >
           {value ? (
          <Section title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
       </>
  )
};
