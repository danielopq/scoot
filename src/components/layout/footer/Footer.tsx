import './footer.css';

const Footer:React.FC = ():React.JSX.Element =>{
    return (
        <footer>
            <div id="footerTop">
                <h2>Sign up and Scoot off today</h2>
                <div>
                    <button className='signUpBt' id="appStoreBt"></button>
                    <button className='signUpBt' id="googlePlayBt"></button>
                </div>
            </div>
            <div id="footerBottom"></div>
        </footer>
    )
}
export default Footer;