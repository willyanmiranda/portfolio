import FrontEnd from "./front";
import BackEnd from "./back";

const Skills = () => {
    return(
        <section id="skills">
            <h2 id="section-title">Skills</h2>
            <span id="section-subtitle">Meu nível técnico </span>

            <div id="skills-container">
                <FrontEnd />
                <BackEnd />
            </div>
        </section>
    )
}

export default Skills;