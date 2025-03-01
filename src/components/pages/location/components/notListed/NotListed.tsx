import './notListed.css';
import { DefaultButton } from '../../../../ui';

/**
 * Renders a section encouraging users to request Scoot in their city.
 * 
 * @returns {React.JSX.Element} The NotListed component.
 */
const NotListed: React.FC = (): React.JSX.Element => {
    return (
        <section id="notListed">
            <h2>Your City Not Listed?</h2>
            <p className='defaultText'>
                If you’d like to see Scoot in your hometown, be sure to let us know.
                We track requests and plan launches based on demand. Feel free to
                message us by clicking the link or messaging us on social.
            </p>
            <DefaultButton text='Message Us'/>
        </section>
    )
}
export default NotListed