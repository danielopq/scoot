import './aboutFeatures.css';

import { Feature } from '../../../../layout';
import digitalEra from './img/digital-era.jpg';
import betterLiving from './img/better-living.jpg';

const AboutFeatures: React.FC = (): React.JSX.Element => {
    return (
        <section id="aboutFeatures">
            <Feature
                header='Mobility for the digital era'
                text='Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.'
                pic={digitalEra}
                arrowType='leftUpBottom'
            />
            <Feature
                header='Better urban living'
                text='We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.'
                pic={betterLiving}
                arrowType='rightDownTop'
            />
        </section>
    )
}
export default AboutFeatures;