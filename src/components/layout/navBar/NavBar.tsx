import './navBar.css';
import HamburgerBt from './components/hamburgerBt/HamburgerBt';

const NavBar = (): React.JSX.Element => {
    return (
        <nav id="navBar">
            <HamburgerBt />
        </nav>
    )
}
export default NavBar;