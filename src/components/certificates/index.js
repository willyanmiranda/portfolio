const Certificates = () => {
    return(
        <section id="certificates">
            <h2 id="section-title">Certificados</h2>
            <span id="section-subtitle">Certificados obtidos pelo HackerRank</span>

            <div id="certificates-container">
                <div id="certificates-content">
                    <div>
                        <i className="uil uil-react" id="certificates-icon"></i>
                        <h3 id="certificates-title">React</h3>
                    </div>

                    <span id="certificates-button">Ver mais <i className="uil uil-arrow-right" id="certificates-button-icon"></i> </span>
                </div>

                <a href="https://www.hackerrank.com/certificates/iframe/256e053ca8dc" target="_blank">
                    <div id="certificates-content">
                        <div>
                            <i className="uil uil-java-script" id="certificates-icon"></i>
                            <h3 id="certificates-title">Javascript</h3>
                        </div>

                        <span id="certificates-button">Ver mais <i className="uil uil-arrow-right" id="certificates-button-icon"></i> </span>
                    </div>
                </a>

                <a href="https://www.hackerrank.com/certificates/iframe/1079c7daae0c" target="_blank">
                    <div id="certificates-content">
                        <div>
                            <i className="uil uil-css3-simple" id="certificates-icon"></i>
                            <h3 id="certificates-title">CSS</h3>
                        </div>

                        <span id="certificates-button">Ver mais <i className="uil uil-arrow-right" id="certificates-button-icon"></i> </span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Certificates;