import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {

    const [copy, setCopy] = useState(false);

    const changeAlert = () => {
        setTimeout(() => {
            setCopy(false)
        }, 3000)
    }

    return (
        <section id="contact">
            <h2 id="section-title">Contato</h2>
            <span id="section-subtitle">Entre em contato</span>

            <div id="contact-container">
                <div id="contact-content">

                    <div id="contact-info">
                        <CopyToClipboard text="contatowillyanmiranda@gmail.com" onCopy={() => setCopy(true)}>
                            <div id="contact-card" onClick={() => changeAlert()}>
                                <i className="bx bx-mail-send" id="contact-card-icon"></i>

                                <h3 id="contact-card-title">Email</h3>
                                <span id="contact-card-data">contatowillyanmiranda@gmail.com</span>

                                <span id="contact-button">Fale comigo <i className="bx bx-right-arrow-alt" id="contact-button-icon"></i> </span>
                            </div>
                        </CopyToClipboard>

                    <a href="https://wa.me/+5541999876472?text=Ol%C3%A1!%20Entre%20em%20contato%20com%20o%20Willyan.">
                        <div id="contact-card">
                            <i className="bx bxl-whatsapp" id="contact-card-icon"></i>

                            <h3 id="contact-card-title">Whatsapp</h3>
                            <span id="contact-card-data">(41) 99987-6472</span>

                            <span id="contact-button">Fale comigo <i className="bx bx-right-arrow-alt" id="contact-button-icon"></i> </span>
                        </div>
                    </a>

                    <a href='https://www.linkedin.com/in/willyan-miranda-568182200' target="_blank"> 
                        <div id="contact-card">
                            <i class='bx bxl-linkedin-square' id="contact-card-icon"></i>

                            <h3 id="contact-card-title">Linkedin</h3>
                            <span id="contact-card-data">Willyan Miranda</span>

                            <span id="contact-button">Fale comigo <i className="bx bx-right-arrow-alt" id="contact-button-icon"></i> </span>
                        </div>
                    </a>
                    </div>
                </div>

            </div>
            {copy ? <span id='contact-alert'>Copiado para a área de transferência</span> : "" }
        </section>
    )
}

export default Contact;