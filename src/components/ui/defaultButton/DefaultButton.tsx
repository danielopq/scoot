import './defaultButton.css';

interface DefaultButtonProps{
    text: string;
    handleClick?: () => void;
}

/**
 * Renders a reusable button used in different areas of the website. 
 * 
 * @param {Object} props - Component props.
 * @param {string} props.text - Text displayed on the button. 
 * @param {() => void} props.handleClick - Callback function executed when the button is clicked.
 * @returns {JSX.Element} The DefaultButton component.
 */
const DefaultButton:React.FC<DefaultButtonProps> = ({text,handleClick}):React.JSX.Element=>{
    return(
        <button className='defaultButton' onClick={handleClick}>{text}</button>
    )
}
export default DefaultButton;