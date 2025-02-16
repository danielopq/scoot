import './hamburgerBt.css';

interface HamburgerBtProps{
    menuDisplayed?:boolean;
    handleClick: ()=>void;
}

/**
 * Renders the hamburger button used in the navigation bar to toggle the mobile menu.
 *
 * @param {Object} props - Component props.
 * @param {boolean} [props.menuDisplayed=false] - Indicates whether the menu is currently displayed.
 * @param {Function} props.handleClick - Function to handle the button click event.
 * @returns {JSX.Element} A button element that toggles between open and close states.
 */
const HamburgerBt:React.FC<HamburgerBtProps> = ({menuDisplayed = false,handleClick}):React.JSX.Element=>{
    return(
        <button id="hamburgerBt" className={menuDisplayed ? 'closeIcon' : 'burgerIcon'} onClick={handleClick}></button>
    )
}
export default HamburgerBt;