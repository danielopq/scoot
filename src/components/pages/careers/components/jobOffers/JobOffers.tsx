import './jobOffers.css';
import Offer from './components/Offer';

/**
 * Displays the job offers section in the Careers area of the website.
 * 
 * @returns {React.JSX.Element} The JobOffers component.
 */
const JobOffers: React.FC = (): React.JSX.Element => {
    return (
        <section id="jobOffers">
            <Offer
                position='General Manager'
                location='Jakarta, Indonesia'
            />
            <Offer
                position='UI/UX Designer'
                location='Yokohama, Japan'
            />
            <Offer
                position='Blog Content Copywriter'
                location='New York, United States'
            />
            <Offer
                position='Graphic Designer'
                location='New York, United States'
            />
            <Offer
                position='Fleet Supervisor'
                location='Jakarta, Indonesia'
            />
            <Offer
                position='UX Analyst'
                location='London, United Kingdom'
            />
        </section>
    )
}

export default JobOffers;