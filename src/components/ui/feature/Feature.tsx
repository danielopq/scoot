import './feature.css';

interface FeatureProps {
    pic:string;
    arrowType: 'leftDownBottom' | 'leftDownTop' | 'rightDownTop';
    header: string;
    text:string;
}

const Feature: React.FC<FeatureProps> = ({pic,arrowType,header,text}): React.JSX.Element => {
    return (
        <div className='feature'>
            <div className='featureTop'>
                <div className='featureMainPic' style={{backgroundImage:`url(${pic})`}}></div>
                <div className={`featureArrow ${arrowType}`}></div>
            </div>
            <h2>{header}</h2>
            <p className='defaultText'>{text}</p>
        </div>
    )
}
export default Feature;