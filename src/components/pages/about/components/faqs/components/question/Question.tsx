import { useEffect, useRef, useState } from 'react';
import './question.css';

interface QuestionProps {
    questionBody: string;
    answerText: string;
    expanded:boolean;
}

/**
 * Renders a component that displays a frequently asked question (FAQ) along with its answer.  
 * A button toggles the visibility of the answer.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.questionBody - The text of the question.
 * @param {string} props.answerText - The answer corresponding to the question.
 * @param {boolean} props.expanded - .
 * 
 * @returns {React.JSX.Element} The Question component.
 */
const Question: React.FC<QuestionProps> = ({questionBody,answerText,expanded = false}): React.JSX.Element => {
    const [expandQuestion,setExpandQuestion] = useState<boolean>(expanded);
    const refAnswer = useRef<HTMLParagraphElement>(null)

    useEffect((()=>{
        if(refAnswer.current) refAnswer.current.style.display = (expandQuestion) ? 'block' : 'none'; 
    }),[expandQuestion]);

    return (
        <div className='question'>
            <button onClick={()=>setExpandQuestion(!expandQuestion)} className={ expandQuestion ? 'chevronUp' : 'chevronDown'}>{questionBody}</button>
            <p ref={refAnswer} className='defaultText'>{answerText}</p>
        </div>
    )
}
export default Question;