import React, {useContext, useRef, useState} from 'react';
import '../style/header.css';
import Logo from "../source/logo.svg";
import LanguageIMG from "../source/language.svg";
import LanguageContext from "../language-context.jsx";
function Header() {
    const {LanguageData, language, setLanguage} = useContext(LanguageContext);
    const burgerMenu = useRef(null);
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);
    const BurgerMenuSwitcher = () => {
        if (burgerIsOpen) {
            document.body.style.overflow = "auto";
            setBurgerIsOpen(!burgerIsOpen);
        }
        else {
            document.body.style.overflow = "hidden";
            setBurgerIsOpen(!burgerIsOpen);
        }
    }

    const setLanguageButton = () => {
        if (language === "en") {
            localStorage.setItem("User-Language", "ua");
            setLanguage("ua");
        }
        else {
            localStorage.setItem("User-Language", "en");
            setLanguage("en");
        }
    }
    return (
        <header>
            <div className="header_container">
                <div className="header_logo_row">
                    <img src={Logo} alt="logo"/>
                    <h1 className="header_logo_name">Block<span>NFT</span></h1>
                </div>
                <nav className="header_menu">
                    <ul className="header_menu-desktop">
                        <li><a className="header_menu_item" href="/company">{LanguageData[language].header.company}</a></li>
                        <li><a className="header_menu_item" href="/product">{LanguageData[language].header.product}</a></li>
                        <li><a className="header_menu_item" href="/artist">{LanguageData[language].header.artist}</a></li>
                        <li><a className="header_menu_item" href="/wallet">{LanguageData[language].header.wallet}</a></li>
                    </ul>
                    <ul className="header_menu-control">
                        <li className="header_menu-smartphone-burger-button">
                            <div className={`nav-icon ${burgerIsOpen ? 'open' : ''}`} onClick={BurgerMenuSwitcher}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <li id="header_language-desktop">
                            <div onClick={setLanguageButton} className="header_language">
                                <img src={LanguageIMG} alt="Lang"/>
                                <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div ref={burgerMenu} className={"header_menu-smartphone " + (burgerIsOpen ? 'active' : '')}>
                <ul className="header_menu-smartphone_list">
                    <li><a className="header_menu_item" href="/company">{LanguageData[language].header.company}</a></li>
                    <li><a className="header_menu_item" href="/product">{LanguageData[language].header.product}</a></li>
                    <li><a className="header_menu_item" href="/artist">{LanguageData[language].header.artist}</a></li>
                    <li><a className="header_menu_item" href="/wallet">{LanguageData[language].header.wallet}</a></li>
                </ul>
                <div onClick={setLanguageButton} className="header_language">
                    <img src={LanguageIMG} alt="Lang"/>
                    <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;