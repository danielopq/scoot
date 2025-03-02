import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navBar.css';
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
    const navigate = useNavigate();

    useEffect(() => {
        if (mobileNavBarRef.current) {
            mobileNavBarRef.current.className = mobileMenuDisplay ? 'displayed' : 'hidden';
            mobileMenuDisplay ? document.body.classList.add('noScroll') : document.body.classList.remove('noScroll');
        }
    }, [mobileMenuDisplay]);

    /**
     * Navigates to the specified path within the website.
     * 
     * @param {string} path - The destination path to navigate to.
     * @param {boolean} mobileMenu - Indicates whether the navigation is triggered from the mobile menu.
     */
    const navigateTo = (path: string, mobileMenu: boolean) => {
        navigate(path);
        mobileMenu && setMobileMenuDisplay(!mobileMenuDisplay);
    }

    return (
        <nav id="navBar">
            <HamburgerBt menuDisplayed={mobileMenuDisplay} handleClick={(): void => setMobileMenuDisplay(!mobileMenuDisplay)} />
            <div id="desktopNavBar">
                <div>
                    <button id="logoBt" onClick={() => navigateTo('/', false)}></button>
                    <div>
                        <NavBarButton text="About" handleClick={() => navigateTo('/about', false)} />
                        <NavBarButton text="Location" handleClick={() => navigateTo('/location', false)} />
                        <NavBarButton text="Careers" handleClick={() => navigateTo('/careers', false)} />
                    </div>
                </div>
                <DefaultButton text="Get Scootin" />
            </div>
            <div ref={mobileNavBarRef} id="mobileNavBar">
                <div id="mobileNavBar-content">
                    <div>
                        <MobileNavBarButton text="Home" handleClick={() => navigateTo('/', true)} />
                        <MobileNavBarButton text="About" handleClick={() => navigateTo('/about', true)} />
                        <MobileNavBarButton text="Location" handleClick={() => navigateTo('/location', true)} />
                        <MobileNavBarButton text="Careers" handleClick={() => navigateTo('/careers', true)} />
                    </div>
                    <DefaultButton text="Get Scootin" />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;