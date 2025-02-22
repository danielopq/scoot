import './value.css';

interface ValueProps {
    mainPic: string;
    valueNumber: string;
    title: string;
    text: string;
}

/**
 * This component renders a single company value, displaying an image,  
 * a number, a title, and a descriptive text.
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.mainPic - The background image representing the value.
 * @param {string} props.valueNumber - The numerical identifier of the value.
 * @param {string} props.title - The title of the value.
 * @param {string} props.text - The description of the value.
 * 
 * @returns {React.JSX.Element} A styled element representing a company value.
 */
const Value:React.FC<ValueProps> = ({mainPic,valueNumber,title,text}) =>{
    return(
        <div className='value'>
            <div className='valueMainPic' style={{backgroundImage:`url(${mainPic})`}}></div>
            <div className='valueNumber'>{valueNumber}</div>
            <p className='valueTitle'>{title}</p>
            <p className='defaultText'>{text}</p>
        </div>
    )
}
export default Value;