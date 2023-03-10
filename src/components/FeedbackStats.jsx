import React from 'react';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  // toFixed() -> limits decimal to 1 ||  replace('regex') -> removes trailing zero's
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
