import PropTypes from 'prop-types';
import css from 'components/FeedBackForm/FeedBackForm.module.css';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
return (
    <ul className={css.buttonList}>
    {options.map(option => {
        return (
        
          <li key = {option}>
            <button onClick={()=> {onLeaveFeedback(option);}}>{option}</button>
          </li>

       
        );
    })}
     </ul>
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}