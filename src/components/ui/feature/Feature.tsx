import './feature.css';

interface FeatureProps {
    pic: string;
    arrowType: 'leftDownBottom' | 'leftDownTop' | 'leftUpBottom' | 'rightDownTop';
    header: string;
    text: string;
}

/**
 * Renders a feature component with an image, arrow, and descriptive text.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.pic - The URL of the feature image.
 * @param {'leftDownBottom' | 'leftDownTop' | 'rightDownTop'} props.arrowType - The type of arrow to display.
 * @param {string} props.header - The title or heading of the feature.
 * @param {string} props.text - The descriptive text of the feature.
 * @returns {React.JSX.Element} The rendered Feature component.
 */
const Feature: React.FC<FeatureProps> = ({ pic, arrowType, header, text }): React.JSX.Element => {
    return (
        <div className={(arrowType == 'leftDownBottom' || arrowType == 'leftDownTop') ? 'feature leftDirection' : 'feature rightDirection'}>
            <div className='featureTop'>
                <div className='featureMainPic' style={{ backgroundImage: `url(${pic})` }}></div>
                <div className={`featureArrow ${arrowType}`}></div>
            </div>
            <div className='featureBottom'>
                <h2>{header}</h2>
                <p className='defaultText'>{text}</p>
            </div>
        </div>
    )
}
export default Feature;