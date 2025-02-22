import './scootValues.css';

import Value from './components/value/Value';

import tech from './img/our-tech.jpg';
import integrity from './img/our-integrity.jpg';
import community from './img/our-community.jpg';

interface ScootValuesProps {
    title: string;
}

/**
 * This component displays the core values of the company, including technology, integrity, 
 * and community. Each value is represented with an image, a number, a title, and a description.
 * 
 * @param {ScootValuesProps} props - The props for the component.
 * @param {string} props.title - The main title displayed at the top of the section.
 * @returns {React.JSX.Element} The rendered ScootValues component.
 */
const ScootValues: React.FC<ScootValuesProps> = ({title}): React.JSX.Element => {
    return (
        <section id="scootValues">
            <h2>{title}</h2>
            <div>
                <Value
                    mainPic={tech}
                    valueNumber='01'
                    title='Our Tech'
                    text='We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!'
                />
                <Value
                    mainPic={integrity}
                    valueNumber='02'
                    title='Our integrity'
                    text='We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.'
                />
                <Value
                    mainPic={community}
                    valueNumber='03'
                    title='Our community'
                    text='We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.'
                />
            </div>
        </section>
    )
}
export default ScootValues;