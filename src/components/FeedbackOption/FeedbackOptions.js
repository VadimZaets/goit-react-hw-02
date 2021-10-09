
import PropTypes from 'prop-types';


function FeedbackOptions({ options, leaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      key={option}
      onClick={() => leaveFeedback(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;