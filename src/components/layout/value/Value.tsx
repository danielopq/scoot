import './value.css';

interface ValueProps{
    mainPic:string;
    valueNumber:string;
    title:string;
    text:string;
}

const Value:React.FC<ValueProps> = ({mainPic,valueNumber,title,text}) =>{
    return(
        <div className='value'>
            <div className='valueMainPic' style={{backgroundImage:`url(${mainPic})`}}></div>
            <div className='valueNumber'>{valueNumber}</div>
            <p className='valueTitle'>{title}</p>
            <p className='defaultText'>{text}</p>
        </div>
    )
}
export default Value;