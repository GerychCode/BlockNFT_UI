import React, {useContext} from 'react';
import '../style/contact-form-block.css';
import MainImage from '../source/contact-form/Main_Image.png';
import LanguageContext from "../language-context";
function ContactFormBlock() {
    const {LanguageData, language} = useContext(LanguageContext);

    return (
        <section className="contact_form_container">
            <img className="contact_form_image" src={MainImage} alt="MainImage"/>
            <div className="contact_form_info">
                <h1 className="contact_form_info_title" >{LanguageData[language].contact_form_block.title}</h1>
                <p className="contact_form_info_paragraph">{LanguageData[language].contact_form_block.paragraph}</p>
                <form className="contact_form_input_block">
                    <input className="contact_form_input_text" type="email" placeholder={LanguageData[language].contact_form_block.placeholder}/>
                    <button className="contact_form_input_button">{LanguageData[language].contact_form_block.button}</button>
                </form>
            </div>
        </section>
    );
}

export default ContactFormBlock;