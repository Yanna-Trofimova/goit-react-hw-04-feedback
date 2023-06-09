

import  { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export function App (){
  const [good,setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


 

  const hadleClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(good +1);
        break;
      
      case 'neutral':
        setNeutral(neutral+1);
        break;
      
      case 'bad':
        setBad(bad+1);
        break;
      
      default:
        return;
    }


    
  };

  const countSumOfFeedbacks=() =>{
    return Object.values({ good, bad, neutral }).reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);

 
  }

  const countPositiveFeedback=() =>{
  
    return Math.round((good / countSumOfFeedbacks()) * 100);
  }



    return (
      <>
       
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, bad, neutral })}
            onBtnClick={hadleClick}
          />
        </Section>

        <Section title="Statistics">
          {good === 0 && bad === 0 && neutral === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              sum={countSumOfFeedbacks()}
              positiveFeedback={countPositiveFeedback()}
            />
          )}
          </Section>
          
      </>
    );
  }
// }

export default App