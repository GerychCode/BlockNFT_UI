import React, {useContext} from 'react';
import '../../style/road-map/road-map-block.css';
import RoadMapBlockItem from "./road-map-block-item";
import LanguageContext from "../../language-context";

function RoadMapBlock(props) {
    const {LanguageData, language} = useContext(LanguageContext);

    return (
        <section className='road_map_container'>
            <h1 className="road_map_title">{LanguageData[language].road_map_block.title}</h1>
            <ul>
                {LanguageData[language].road_map_block.list.map((value, index, array) => {
                    return <RoadMapBlockItem key={index} title={value.title} paragraph={value.paragraph}/>
                })}
            </ul>
        </section>
    );
}

export default RoadMapBlock;