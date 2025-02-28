import { useEffect, useState } from 'react';
import './cityPointer.css';

interface CityPointerProps {
    city: string;
    tabletTop: string;
    tabletLeft: string;
    desktopTop: string;
    desktopLeft: string;
}

/**
 * Displays a pointer on the map indicating the location of a city.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.city - The name of the city.
 * @param {string} props.tabletTop - The top position for tablet screens.
 * @param {string} props.tabletLeft - The left position for tablet screens.
 * @param {string} props.desktopTop - The top position for desktop screens.
 * @param {string} props.desktopLeft - The left position for desktop screens.
 * @returns {React.JSX.Element} The CityPointer component.
 */
const CityPointer: React.FC<CityPointerProps> = ({ city, tabletTop, tabletLeft, desktopTop, desktopLeft }): React.JSX.Element => {
    const [pointerCoor, setPointerCoor] = useState<React.CSSProperties>({});

    useEffect(() => {
        updatePointerCoor();
        window.addEventListener('resize', updatePointerCoor);
        return () => {
            window.removeEventListener('resize', updatePointerCoor);
        };
    }, [pointerCoor]);

    /**
     * Updates the pointer position based on the current screen size.
     * Determines whether the viewport is desktop or tablet and applies 
     * the corresponding coordinates.
     */
    const updatePointerCoor = () => {
        const isDesktop = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        isDesktop && setPointerCoor({ top: desktopTop, left: desktopLeft });
        isTablet && setPointerCoor({ top: tabletTop, left: tabletLeft });
    };

    return (
        <div className='cityPointer' style={pointerCoor}>
            <div>{city}</div>
            <div></div>
        </div>
    )
}
export default CityPointer;