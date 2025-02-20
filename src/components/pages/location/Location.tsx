import { PageHeader } from "../../layout";
import mobileHeaderPic from '../../../assets/img/headers/careers-location-hero-mobile.jpg';
import tabletHeaderPic from '../../../assets/img/headers/careers-locations-hero-tablet.jpg';
import desktopHeaderPic from '../../../assets/img/headers/careers-locations-hero-desktop.jpg';

/**
 * Location component that renders the Location section of the website.
 * 
 * @returns {React.JSX.Element} The rendered Location component.
 */
const Location:React.FC = ():React.JSX.Element=>{
    return(
        <main id="location">
            <PageHeader title="Locations" mobileImg={mobileHeaderPic} tabletImg={tabletHeaderPic} desktopImg={desktopHeaderPic}/>
        </main>
    )
}
export default Location;