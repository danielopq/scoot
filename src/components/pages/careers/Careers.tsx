import { PageHeader } from "../../layout";
import mobileHeaderPic from '../../../assets/img/headers/careers-location-hero-mobile.jpg';
import tabletHeaderPic from '../../../assets/img/headers/careers-locations-hero-tablet.jpg';
import desktopHeaderPic from '../../../assets/img/headers/careers-locations-hero-desktop.jpg';

/**
 * Careers component that renders the Careers section of the website.
 * 
 * @returns {React.JSX.Element} The rendered Careers component.
 */
const Careers:React.FC = ():React.JSX.Element=>{
    return(
        <main id="careers">
            <PageHeader title="Careers" mobileImg={mobileHeaderPic} tabletImg={tabletHeaderPic} desktopImg={desktopHeaderPic}/>
        </main>
    )
}
export default Careers;