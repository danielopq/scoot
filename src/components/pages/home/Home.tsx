import { HomeHeader, HomeUserInstructions, HomeFeatures } from "./components";

/**
 * Renders the home page 
 * 
 * @returns {JSX.Element} - The Home component
 */
const Home = (): React.JSX.Element => {
    return (
        <main>
            <HomeHeader />
            <HomeUserInstructions />
            <HomeFeatures />
        </main>
    )
}
export default Home;
