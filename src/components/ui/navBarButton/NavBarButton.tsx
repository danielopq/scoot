import './navBarButton.css';

interface navBarButtonProps {
    text: string;
    handleClick?: () => void;
}

/**
 * Renders a button for the navigation bar.  
 * 
 * @param {Object} props - Component props.
 * @param {string} props.text - Text displayed on the button. 
 * @param {() => void} props.handleClick - Callback function executed when the button is clicked.
 * @returns {JSX.Element} The NavBarButton component.
 */

const NavBarButton: React.FC<navBarButtonProps> = ({ text, handleClick }): React.JSX.Element => {
    return (
        <button className='navBarButton' onClick={handleClick}>{text}</button>
    )
}
export default NavBarButton;