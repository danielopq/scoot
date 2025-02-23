import './question.css';

interface QuestionProps {
    questionBody: string;
    answerText: string;
}

/**
 * Renders a component that displays a frequently asked question (FAQ) along with its answer.  
 * A button toggles the visibility of the answer.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.questionBody - The text of the question.
 * @param {string} props.answerText - The answer corresponding to the question.
 * 
 * @returns {React.JSX.Element} The Question component.
 */
const Question: React.FC<QuestionProps> = ({questionBody,answerText}): React.JSX.Element => {
    return (
        <div className='question'>
            <button>{questionBody}</button>
            <p>{answerText}</p>
        </div>
    )
}
export default Question;