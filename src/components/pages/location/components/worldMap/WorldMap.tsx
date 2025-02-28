import './worldMap.css';

import { CityPointer } from '../../../../ui';

/**
 * Displays a world map highlighting the cities where the company operates.
 * 
 * @returns {React.JSX.Element} The WorldMap component.
 */
const WorldMap:React.FC = ():React.JSX.Element=>{
    return(
        <section id="worldMap">
            <div id="mobileCities">
                <div>New York</div>
                <div>London</div>
                <div>Yakarta</div>
                <div>Yokohama</div>
            </div>
            <div id="TabletDesktopCities">
                <CityPointer
                city='New York'
                tabletTop='52px'
                tabletLeft='98px'
                desktopLeft=''
                desktopTop=''
                />
                <CityPointer
                city='London'
                tabletTop='25px'
                tabletLeft='243px'
                desktopLeft=''
                desktopTop=''
                />
                <CityPointer
                city='Yakarta'
                tabletTop='169px'
                tabletLeft='480px'
                desktopLeft=''
                desktopTop=''
                />
                <CityPointer
                city='Yokohama'
                tabletTop='65px'
                tabletLeft='530px'
                desktopLeft=''
                desktopTop=''
                />
            </div>
        </section>
    )
}
export default WorldMap;