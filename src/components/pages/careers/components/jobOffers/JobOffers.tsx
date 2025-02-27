import './jobOffers.css';
import Offer from './components/Offer';

const JobOffers: React.FC = (): React.JSX.Element => {
    return (
        <section id="jobOffers">
            <Offer
                position='General Manager'
                location='Jakarta, Indonesia'
            />
        </section>
    )
}

export default JobOffers;