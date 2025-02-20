import './footer.css';
import { NavBarButton } from '../../ui';
import navigateTo from '../../../utils/navigateTo';

/**
 * Footer component displayed across all sections of the website.
 * 
 * @returns {React.JSX.Element} The Footer component.
 */
const Footer: React.FC = (): React.JSX.Element => {
    return (
        <footer>
            <div id="footerTop">
                <h2>Sign up and Scoot off today</h2>
                <div>
                    <button className='signUpBt' id="appStoreBt" aria-label='app store'></button>
                    <button className='signUpBt' id="googlePlayBt" aria-label='google play'></button>
                </div>
            </div>
            <div id="footerBottom">
                <nav>
                    <div id="footerLinks">
                        <NavBarButton text="About" handleClick={navigateTo('/about')}/>
                        <NavBarButton text="Location" handleClick={navigateTo('/location')} />
                        <NavBarButton text="Careers" handleClick={navigateTo('/careers')} />
                    </div>
                    <div id="socialMedia">
                        <button className='mediaBt' id="facebook"></button>
                        <button className='mediaBt' id="twitter"></button>
                        <button className='mediaBt' id="instagram"></button>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
export default Footer;