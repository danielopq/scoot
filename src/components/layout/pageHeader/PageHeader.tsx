import { useEffect, useState } from 'react';
import './pageHeader.css';

interface PageHeaderProps {
    title: string;
    mobileImg: string;
    tabletImg: string;
    desktopImg: string;
}

/**
 * Component that renders a header at the top of certain sections of the website.
 * 
 * @param {PageHeaderProps} props - The properties for the PageHeader component.
 * @param {string} props.title - The title displayed in the header.
 * @param {string} props.mobileImg - The background image for mobile screens.
 * @param {string} props.tabletImg - The background image for tablet screens.
 * @param {string} props.desktopImg - The background image for desktop screens.
 * @returns {React.JSX.Element} The rendered PageHeader component.
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, mobileImg, tabletImg, desktopImg }): React.JSX.Element => {

    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        updateBackgroundImage();
        window.addEventListener('resize', updateBackgroundImage);
        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, [desktopImg, tabletImg, mobileImg]);

    /**
     * Updates the background image based on the current window size.
     * Determines the screen size category (desktop, tablet, or mobile)
     * and sets the appropriate image URL.
     */
    const updateBackgroundImage = () => {
        const isDesktop = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        setBackgroundImage(isDesktop ? desktopImg : isTablet ? tabletImg : mobileImg);
    };

    return (
        <header className='pageHeader' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div>
                <h1>{title}</h1>
            </div>
        </header>
    )
}
export default PageHeader;