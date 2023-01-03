const Footer = () => {
    return (
        <footer id="footer">
            <div id="footer-container">
                <h1 id="footer-title">Willyan</h1>

                <ul id="footer-list">
                    <li>
                        <a href="#about" id="footer-link">Sobre</a>
                    </li>

                    <li>
                        <a href="#portfolio" id="footer-link">Portifólio</a>
                    </li>

                    <li>
                        <a href="#skills" id="footer-link">Skills</a>
                    </li>
                </ul>

                <div id="footer-social">
                    <a href="https://www.instagram.com/lyan_nda/" id="footer-social-link" target="_blank" rel="help">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/willyan-miranda-568182200" id="footer-social-link" target="_blank" rel="help">
                        <i className="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/willyanmiranda" id="footer-social-link" target="_blank" rel="help">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>
                <span id="footer-copy">&#169; Willyan Miranda. Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;