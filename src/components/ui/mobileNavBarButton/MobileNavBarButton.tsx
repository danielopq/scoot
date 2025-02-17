import './MobileNavBarButton.css';

interface MobileNavBarButtonProps {
    text: string;
    handleClick?: () => void;
}

/**
 * Renders a button for the navigation bar.  
 * 
 * @param {Object} props - Component props.
 * @param {string} props.text - Text displayed on the button. 
 * @param {() => void} props.handleClick - Callback function executed when the button is clicked.
 * @returns {JSX.Element} The MobileNavBarButton component.
 */

const MobileNavBarButton: React.FC<MobileNavBarButtonProps> = ({ text, handleClick }): React.JSX.Element => {
    return (
        <button className='mobileNavBarButton' onClick={handleClick}>{text}</button>
    )
}
export default MobileNavBarButton;