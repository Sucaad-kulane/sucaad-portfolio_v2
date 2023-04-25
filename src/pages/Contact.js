import { FaLinkedin, FaTwitterSquare, FaGithub } from 'react-icons/fa';

const Contact = ({ name, title }) => {
    return <div>
        <section className="front">
            <img src="" />
        </section>
        <div style={{ textAlign: 'center' }}>
            <h1>Find me here:</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/in/sucaad-kulane/" style={{ marginRight: '1em' }}>
                <FaLinkedin className="fa-5x fa-fw" style={{ fontSize: '5em' }} />
            </a>
            <a href="https://github.com/Sucaad-kulane">
                <FaGithub className="fa-5x fa-fw" style={{ fontSize: '5em' }} />
            </a>
        </div>

    </div>
}
export default Contact;
