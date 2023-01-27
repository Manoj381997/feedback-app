import { FaTimes, FaEdit } from 'react-icons/fa';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from './context/FeedbackContext';

// State in react is mutable(liable to change), means it can't be directly changed
function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(item.rating);
  // const [text, setText] = useState(item.text);
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  /* 'State' Example
  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };
  */

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
