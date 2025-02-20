import './homeFeatures.css';

import telemetryPic from './img/telemetry.jpg';
import nearYou from './img/near-you.jpg';
import payments from './img/payments.jpg';

import { Feature,DefaultButton } from '../../../../ui';

const HomeFeatures = () => {
    return (
        <section id="homeFeatures">
            <div>
                <Feature
                    pic={telemetryPic}
                    arrowType='leftDownBottom'
                    header='Easy to use riding telemetry'
                    text='The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you&apos;ve been using the scooter, your traveling distance, and many more things all in an easy to use app.'
                />
                <DefaultButton text='Learn More'/>
            </div>
            <div>
                <Feature
                    pic={nearYou}
                    arrowType='rightDownTop'
                    header='Coming to a city near you'
                    text='Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.'
                />
                <DefaultButton text='Learn More'/>
            </div>
            <div>
                <Feature
                    pic={payments}
                    arrowType='leftDownTop'
                    header='Zero hassle payments'
                    text='Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.'
                />
                <DefaultButton text='Learn More'/>
            </div>
        </section>
    )
}
export default HomeFeatures;