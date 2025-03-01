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
                desktopLeft='147px'
                desktopTop='71px'
                />
                <CityPointer
                city='London'
                tabletTop='25px'
                tabletLeft='243px'
                desktopLeft='393px'
                desktopTop='18px'
                />
                <CityPointer
                city='Yakarta'
                tabletTop='169px'
                tabletLeft='480px'
                desktopLeft='779px'
                desktopTop='251px'
                />
                <CityPointer
                city='Yokohama'
                tabletTop='65px'
                tabletLeft='530px'
                desktopLeft='856px'
                desktopTop='78px'
                />
            </div>
        </section>
    )
}
export default WorldMap;