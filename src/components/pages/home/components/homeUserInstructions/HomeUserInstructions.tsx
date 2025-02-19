import './homeUserInstructions.css';

/**
 * Renders a home section that explains how to use the scooter-sharing service.
 * 
 * @returns {React.JSX.Element} The HomeUserInstructions component.
 */
const HomeUserInstructions: React.FC = (): React.JSX.Element => {
    return (
        <section id="homeUserInstructions">
            <div className='instruction' id="locate">
                <h3>Locate with app</h3>
                <p className='defaultText'>
                    Use the app to find the nearest scooter to you.
                    We are continuously placing scooters in the areas with most demand,
                    so one should never be too far away.
                </p>
            </div>
            <div className='instruction' id="scooter">
                <h3>Pick your scooter</h3>
                <p className='defaultText'>
                    We show the most important info for the scooters
                    closest to you. So you know how much charge they have left and can see
                    roughly how much it will cost.
                </p>
            </div>
            <div className='instruction' id="ride">
                <h3>Enjoy the ride</h3>
                <p className='defaultText'>
                    Scan the QR code and the bike will unlock.
                    Retract the cable lock, put on a helmet, and you’re off! Always lock
                    bikes away from walkways and accessibility ramps.
                </p>
            </div>
        </section>
    )
}
export default HomeUserInstructions;