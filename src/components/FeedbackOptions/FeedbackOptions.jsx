import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { buttons, btn } = styles;
    return (
        <div className={buttons}>
             {options.map(option => {
        return (
          <button className={btn}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
        </div>
    );
};

FeedbackOptions.propType = {
    options: PropTypes.arrayOf(PropTypes.string),      
    onLeaveFeedback: PropTypes.func,
}