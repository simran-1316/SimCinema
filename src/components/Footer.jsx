import { Link } from "react-router-dom";
const Footer = () => {
    
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <h2>Watch With Us</h2>
                    <p>Stream unlimited movies & shows anytime, anywhere.</p>

                    <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/movies">TV Shows</Link>
                    <a 
                    href="https://www.linkedin.com/in/simran-rawat-126a83380"
                    target="_blank"
                    rel="noreferrer">Contact
                    </a>
                    </div>

                    <p className="copyright">
                        © {new Date().getFullYear()} WatchWithUs. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};
export default Footer;
