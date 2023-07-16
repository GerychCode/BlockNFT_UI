import React, {useContext} from 'react';
import '../style/footer.css';
import Logo from "../source/logo.svg";
import twitter from '../source/social-media/twitter.svg'
import Facebook from '../source/social-media/Facebook.svg'
import linkedin from '../source/social-media/linkedin.svg'
import LanguageContext from "../language-context";

function Footer() {
    const {LanguageData, language} = useContext(LanguageContext);
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <div className='footer_panel'>
                    <div className="footer_logo_row">
                        <img src={Logo} alt="logo"/>
                        <h1 className="footer_logo_name">Block<span>NFT</span></h1>
                    </div>
                    <button className='footer_panel_button'>{LanguageData[language].footer.button}</button>
                    <div className='footer_panel_links_block'>
                        <h1>{LanguageData[language].footer.media}</h1>
                        <ul className='footer_panel_links_list'>
                            <li><a href="https://example.com/"><img src={Facebook} alt='Facebook'/></a></li>
                            <li><a href="https://example.com/"><img src={linkedin} alt='Linkedin'/></a></li>
                            <li><a href="https://example.com/"><img src={twitter} alt='Twitter'/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer_line'></div>
                <h2 className='footer_rights'>@Nblik 2022. All right reserved</h2>
            </div>

        </footer>
    );
}

export default Footer;