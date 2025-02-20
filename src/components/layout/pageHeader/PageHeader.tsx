import './pageHeader.css';

interface PageHeaderProps{
    title:string;
}

const PageHeader:React.FC<PageHeaderProps> = ({title}):React.JSX.Element=>{
    return(
        <header className='pageHeader'>
            <h1>{title}</h1>
        </header>
    )
}
export default PageHeader;