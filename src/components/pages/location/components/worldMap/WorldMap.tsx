import './worldMap.css';

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
        </section>
    )
}
export default WorldMap;