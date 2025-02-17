import { useEffect, useRef, useState } from 'react';
import './navBar.css';
import { HamburgerBt, MobileNavBarButton, DefaultButton } from '../../ui';

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
            <div ref={mobileNavBarRef} id="mobileNavBar">
                <div id="mobileNavBar-content">
                    <div>
                        <MobileNavBarButton text="About" />
                        <MobileNavBarButton text="Location" />
                        <MobileNavBarButton text="Careers" />
                    </div>
                    <DefaultButton text="Get Scootin" />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;