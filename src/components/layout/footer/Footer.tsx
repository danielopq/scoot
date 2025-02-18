import './footer.css';
import { NavBarButton } from '../../ui';

/**
 * Footer component displayed across all sections of the website.
 * 
 * @returns {React.JSX.Element} The Footer component.
 */
const Footer:React.FC = ():React.JSX.Element =>{
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
                    <NavBarButton text="About"/>
                    <NavBarButton text="Location"/>
                    <NavBarButton text="Careers"/>
                </nav>
                <div id="socialMedia">
                    <button className='mediaBt' id="facebook"></button>
                    <button className='mediaBt' id="twitter"></button>
                    <button className='mediaBt' id="instagram"></button>
                </div>
            </div>
        </footer>
    )
}
export default Footer;