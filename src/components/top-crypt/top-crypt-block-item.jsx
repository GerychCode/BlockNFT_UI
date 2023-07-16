import React, {useContext} from 'react';
import '../../style/top-crypt/top-crypt-block-item.css';
import Arrow from "../../source/Arrow.svg";
import LanguageContext from "../../language-context";
function TopCryptBlockItem({props}) {
    const {LanguageData, language} = useContext(LanguageContext);

    return (
        <li className="crypto_item">
            <div className="company_item_logo_block">
                <img src={props.logo} alt={props.name}/>
            </div>
            <h1 className='company_item_name'>{props.name}</h1>
            <h2 className='company_item_cost'>{`${props.cost} USD`}</h2>
            <div className='company_item_schedule'>
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="105" viewBox="0 0 180 105" fill="none">
                    <path d="M179.5 31.2263V103.568H0.5V10.878C0.506626 10.8747 0.513368 10.8714 0.520228 10.8681C0.715453 10.7725 1.00524 10.6326 1.3814 10.4562C2.13377 10.1032 3.23148 9.60429 4.60916 9.02196C7.36511 7.85704 11.2383 6.35982 15.7062 5.03061C24.6628 2.36603 35.9237 0.403249 45.3646 3.05851C49.2718 4.15741 53.2422 6.61025 57.2321 9.71264C60.8333 12.5128 64.4172 15.8149 67.9604 19.0795C68.3404 19.4297 68.72 19.7794 69.099 20.1281C73.0019 23.7176 76.8546 27.1931 80.5829 29.7697C84.3031 32.3408 87.97 34.0679 91.5 34.0679C95.0701 34.0679 98.4619 31.9699 101.791 28.9435C104.677 26.32 107.589 22.9291 110.593 19.4305C111.063 18.8839 111.534 18.3346 112.009 17.7852C115.531 13.7041 119.203 9.60305 123.178 6.41568C127.151 3.22972 131.391 0.987181 136.044 0.575128C141.195 0.118998 146.486 1.77653 151.554 4.56744C156.618 7.35678 161.423 11.258 165.583 15.2319C169.742 19.204 173.246 23.2365 175.71 26.2771C176.942 27.7969 177.913 29.0679 178.576 29.9581C178.907 30.4031 179.161 30.7529 179.332 30.991C179.402 31.0886 179.458 31.1674 179.5 31.2263Z" fill="url(#paint0_linear_2_455)" stroke="url(#paint1_linear_2_455)"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_455" x1="90" y1="-8.72412" x2="90" y2="67.577" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5FA8ED" stopOpacity="0.7"/>
                            <stop offset="1" stopColor="#5FA8ED" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_2_455" x1="92" y1="5.57703" x2="92" y2="33.077" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#62C7FF"/>
                            <stop offset="1" stopColor="#62C7FF" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <a className='company_item_mort-info' href={props.link}>
                <p>{LanguageData[language].top_crypt_block.button}</p>
                <img src={Arrow} alt="arrow"/>
            </a>
        </li>
    );
}

export default TopCryptBlockItem;