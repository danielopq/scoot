import './offer.css';
import { DefaultButton } from '../../../../../ui';

interface OfferProps {
    position: string;
    location: string;
}

/**
 * Job offer component for the careers section of the website.
 * 
 * @param {OfferProps} props - Component properties.
 * @param {string} props.position - Title of the job position.
 * @param {string} props.location - Location where the job is offered.
 * @returns {React.JSX.Element} The Offer component.
 */
const Offer: React.FC<OfferProps> = ({ position, location }: OfferProps): React.JSX.Element => {
    return (
        <div className='offer'>
            <div>
                <p className='offerPosition'>{position}</p>
                <p className='defaultText'>{location}</p>
            </div>
            <DefaultButton text='Apply'/>
        </div>
    )
}
export default Offer;