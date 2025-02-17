import { useState } from 'react';
import './navBar.css';
import {HamburgerBt, DefaultButton} from '../../ui';

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
                    <div>
                        
                    </div>
                    <DefaultButton text="Get Scootin"/>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;