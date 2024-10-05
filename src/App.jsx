import { useState } from 'react'
import { useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

import './App.css'

function App() {

  const [click, setClick] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(click));
  }, [click]);

  const updateFeedback = (feedbackType) => {
    setClick({
    ...click,
		[feedbackType]: click[feedbackType] + 1
	});
};

  const resetFeedback = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = click.good + click.neutral + click.bad;

  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          good={click.good}
          neutral={click.neutral}
          bad={click.bad}
          total={totalFeedback}
          positive ={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification totalFeedback={totalFeedback} />}
    </>
  )
}

export default App
