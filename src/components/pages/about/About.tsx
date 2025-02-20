import { PageHeader } from "../../layout";
import mobileHeaderPic from '../../../assets/img/headers/about-hero-mobile.jpg';
import tabletHeaderPic from '../../../assets/img/headers/about-hero-tablet.jpg';
import desktopHeaderPic from '../../../assets/img/headers/about-hero-desktop.jpg';

/**
 * About component that renders the About section of the website.
 * 
 * @returns {React.JSX.Element} The rendered About component.
 */
const About:React.FC = ():React.JSX.Element=>{
    return(
        <main>
            <PageHeader title="About" mobileImg={mobileHeaderPic} tabletImg={tabletHeaderPic} desktopImg={desktopHeaderPic}/>
        </main>
    )
}
export default About;