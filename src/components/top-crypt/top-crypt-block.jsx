import React, {useContext, useState} from 'react';
import '../../style/top-crypt/top-crypt-block.css';
import TopCryptBlockItem from "./top-crypt-block-item";
import LanguageContext from "../../language-context";
import Bitcoin from "../../source/crypto/Bitcoin.svg";
import Ethereum from "../../source/crypto/Ethereum.svg";
import Riple from "../../source/crypto/Riple.svg";

let top_crypto = [
    {name: "Bitcoin", cost: "33,134,56", link: "https://example.com/", logo: Bitcoin},
    {name: "Ethereum", cost: "2,544,55", link: "https://example.com/", logo: Ethereum},
    {name: "Ripple", cost: "0.861494", link: "https://example.com/", logo: Riple},
]
function TopCryptBlock(props) {
    const [crypto_list, set_crypto_list] = useState(top_crypto);
    const {LanguageData, language} = useContext(LanguageContext);

    return (
        <section className='top_crypto_container'>
            <h1 className='top_crypto_title'>{LanguageData[language].top_crypt_block.title}</h1>
            <p className='top_crypto_paragraph'>{LanguageData[language].top_crypt_block.top_crypto_paragraph}</p>
            <ul className='top_crypto_list'>
                {
                    crypto_list.map((value, index, array) => {
                        return <TopCryptBlockItem props={value} key={index} />
                    })
                }
            </ul>
        </section>
    );
}

export default TopCryptBlock;