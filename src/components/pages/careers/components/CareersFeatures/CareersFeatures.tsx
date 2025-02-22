import './careersFeatures.css';

import { Feature } from '../../../../layout';

import { DefaultButton } from '../../../../ui';

import joinUs from './img/join-us.jpg'

const CareersFeatures: React.FC = (): React.JSX.Element => {
    return (
        <section id="careersFeatures">
            <div className='leftSide'>
                <Feature
                    pic={joinUs}
                    arrowType='leftDownBottom'
                    header='Care to join our mission?'
                    text='We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!'
                />
                <DefaultButton text='Say Hello' />
            </div>
        </section>
    )
}
export default CareersFeatures;