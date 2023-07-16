import React from 'react';
import '../style/company-block.css';
import TRAFFICX from '../source/company/TRAFFIC.svg';
import AKSPRODUCT from '../source/company/AKSPRODUCT.svg';
import ADBOS from '../source/company/adbos.svg';
import COINBADE from '../source/company/CoinBade.svg';

function CompanyBlock() {
    return (
        <div className="company">
            <div className="company_container">
                <div className="company_list">
                    <img className="company_item" src={TRAFFICX} alt="TRAFFICX" />
                    <img className="company_item" src={AKSPRODUCT} alt="AKSPRODUCT" />
                    <img className="company_item" src={ADBOS} alt="ADBOS" />
                    <img className="company_item" src={COINBADE} alt="COINBADE" />
                </div>
                <div className="company_list">
                    <img className="company_item" src={TRAFFICX} alt="TRAFFICX" />
                    <img className="company_item" src={AKSPRODUCT} alt="AKSPRODUCT" />
                    <img className="company_item" src={ADBOS} alt="ADBOS" />
                    <img className="company_item" src={COINBADE} alt="COINBADE" />
                </div>
            </div>
        </div>
    );
}

export default CompanyBlock;
