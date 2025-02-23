import './faqs.css';

import Question from './components/question/question';

/**
 * Renders the FAQ section included in the About page of the website.
 *
 * @returns {React.JSX.Element} The Faqs component.
 */
const Faqs: React.FC = () => {
    return (
        <section id="faqs">
            <h2>FAQs</h2>
            <div>
                <p className='faqTitle'>How it works</p>
                <div>
                    <Question
                        questionBody='How do I download the app?'
                        answerText='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
                    />
                </div>
            </div>
            <div>
                <p className='faqTitle'>Safe driving</p>
            </div>
        </section>
    )
}
export default Faqs;