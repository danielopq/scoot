import './homeHeader.css';
import { DefaultButton } from '../../../../ui';

/**
 * Renders the header included on the home page.
 * 
 * @returns {React.JSX.Element} The HomeHeader component.
 */
const HomeHeader: React.FC = (): React.JSX.Element => {
    return (
        <header id="homeHeader">
            <h1>Scooter sharing made simple</h1>
            <p className='defaultText'>
                Scoot takes the hassle out of urban mobility. Our bikes are placed
                in convenient locations in each of our cities. Use our app to
                locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <DefaultButton text="Get Scootin" />
        </header>
    )
}
export default HomeHeader;