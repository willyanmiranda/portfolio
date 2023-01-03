const Info = () => {
    return(
        <div id="about-info">
            <div id="about-box">
                <i className="bx bx-award" id="about-icon"></i>

                <h3 id="about-title">Cursando</h3>
                <span id="about-subtitle">Engenharia de software</span>
            </div>

            <div id="about-box">
                <i className="bx bx-map" id="about-icon"></i>

                <h3 id="about-title">Endereço</h3>
                <span id="about-subtitle">Curitiba-PR</span>
            </div>

            <div id="about-box">
                <i className="bx bx-user" id="about-icon"></i>

                <h3 id="about-title">Idade</h3>
                <span id="about-subtitle">20 anos</span>
            </div>
        </div>
    )
}

export default Info;