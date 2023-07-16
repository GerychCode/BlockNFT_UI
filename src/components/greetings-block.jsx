import React, {useContext} from 'react';
import '../style/greetings-block.css';
import greetingsImage from '../source/greeting/Main_Image.png';
import LanguageContext from "../language-context";
function GreetingsBlock() {
    const {LanguageData, language} = useContext(LanguageContext);
    return (
        <section className='greetings_container'>
            <div className='greetings_info'>
                <h2 className="greetings_info_postscript">{LanguageData[language].greetings_block.postscript}</h2>
                <h1 className="greetings_info_title">{LanguageData[language].greetings_block.title[0]}<br/>{LanguageData[language].greetings_block.title[1]}</h1>
                <button className="greetings_info_button">{LanguageData[language].greetings_block.button}</button>
            </div>
            <img className="greetings_image" src={greetingsImage} alt="greetings_image"/>
        </section>
    );
}

export default GreetingsBlock;