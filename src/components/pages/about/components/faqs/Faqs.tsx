import './faqs.css';
import Question from './components/question/Question';

/**
 * Renders the FAQ section included in the About page of the website.
 *
 * @returns {React.JSX.Element} The Faqs component.
 */
const Faqs: React.FC = (): React.JSX.Element => {
    return (
        <section id="faqs">
            <h2>FAQs</h2>
            <div>
                <p className='faqTitle'>How it works</p>
                <div>
                    <Question
                        questionBody='How do I download the app?'
                        answerText='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
                        expanded={false}
                    />
                    <Question
                        questionBody='Can I find a nearby Scoots?'
                        answerText='Definitely! Simply open up the app and allow us to find your location while using it. We&apos;ll show you all of the closest Scoots and some extra useful information.'
                        expanded={false}
                    />
                    <Question
                        questionBody='Do I need a license to ride?'
                        answerText='Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.'
                        expanded={false}
                    />
                </div>
            </div>
            <div>
                <p className='faqTitle'>Safe driving</p>
                <div>
                    <Question
                        questionBody='Should I wear a helmet?'
                        answerText='Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
                        expanded={false}
                    />
                    <Question
                        questionBody='How about the rules & regulations?'
                        answerText='  Now is not the time to be a rule breaker. Be sure you&apos;re complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people&apos;s way.'
                        expanded={false}
                    />
                    <Question
                        questionBody='What if I damage my Scoot?'
                        answerText='  Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There&apos;s an option to add insurance for each trip, or you can sign up for annual insurance if you&apos;re a regular Scooter.'
                        expanded={false}
                    />
                </div>
            </div>
        </section>
    )
}
export default Faqs;