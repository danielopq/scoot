import './offer.css';

interface OfferProps{
    position:string;
    location:string;
}

const Offer: React.FC<OfferProps> = ({position,location}): React.JSX.Element => {
    return (
        <div className='offer'>
            <p className='offerPosition'>{position}</p>
            <p className='defaultText'>{location}</p>
        </div>
    )
}
export default Offer;