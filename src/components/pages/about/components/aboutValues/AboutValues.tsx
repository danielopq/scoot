import './aboutValues.css';

import { Value } from '../../../../layout';

import tech from './img/our-tech.jpg';
import integrity from './img/our-integrity.jpg';
import community from './img/our-community.jpg';

const AboutValues: React.FC = (): React.JSX.Element => {
    return (
        <section id="aboutValues">
            <h2>Our values</h2>
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
export default AboutValues;