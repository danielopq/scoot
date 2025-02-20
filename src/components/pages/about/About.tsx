import { PageHeader } from "../../layout";

/**
 * About component that renders the About section of the website.
 * 
 * @returns {React.JSX.Element} The rendered About component.
 */
const About:React.FC = ():React.JSX.Element=>{
    return(
        <main>
            <PageHeader title="About"/>
        </main>
    )
}
export default About;