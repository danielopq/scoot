import './navBar.css';
import HamburgerBt from './components/hamburgerBt/HamburgerBt';
import { useState } from 'react';
import DefaultButton from '../../../ui/defaultButton/defaultButton';

const NavBar = (): React.JSX.Element => {

    const [menuDeploy,setMenuDeploy] = useState<boolean>(false);

    const showMobileMenu = () =>{
        console.log("hello");
        setMenuDeploy(!menuDeploy);
    }

    return (
        <nav id="navBar">
            <HamburgerBt menuDisplayed={menuDeploy} handleClick={showMobileMenu} />
            <div id="mobileNavBar">
                <div id="mobileNavBar-content">
                    <DefaultButton text="Get Scootin"/>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;