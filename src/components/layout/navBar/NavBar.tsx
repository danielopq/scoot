import { useEffect, useRef, useState } from 'react';
import './navBar.css';
import navigateTo from '../../../utils/navigateTo';
import { HamburgerBt, MobileNavBarButton, DefaultButton, NavBarButton } from '../../ui';

/**
 * Navigation bar component displayed at the top of all website sections.
 * It includes a hamburger button for mobile navigation and menu options.
 * 
 * @returns {JSX.Element} The NavBar component.
 */
const NavBar = (): React.JSX.Element => {

    const [mobileMenuDisplay, setMobileMenuDisplay] = useState<boolean>(false);
    const mobileNavBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mobileNavBarRef.current) {
            mobileNavBarRef.current.style.display = mobileMenuDisplay ? 'block' : 'none';
        }
    }, [mobileMenuDisplay]);

    return (
        <nav id="navBar">
            <HamburgerBt menuDisplayed={mobileMenuDisplay} handleClick={(): void => setMobileMenuDisplay(!mobileMenuDisplay)} />
            <div id="desktopNavBar">
                <div>
                    <NavBarButton text="About" handleClick={navigateTo('/about')}/>
                    <NavBarButton text="Location" handleClick={navigateTo('/location')} />
                    <NavBarButton text="Careers" handleClick={navigateTo('/careers')} />
                </div>
                <DefaultButton text="Get Scootin" />
            </div>
            <div ref={mobileNavBarRef} id="mobileNavBar">
                <div id="mobileNavBar-content">
                    <div>
                        <MobileNavBarButton text="About" handleClick={navigateTo('/about')} />
                        <MobileNavBarButton text="Location" handleClick={navigateTo('/location')} />
                        <MobileNavBarButton text="Careers" handleClick={navigateTo('/careers')} />
                    </div>
                    <DefaultButton text="Get Scootin" />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;