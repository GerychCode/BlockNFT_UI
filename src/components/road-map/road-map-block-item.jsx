import React from 'react';
import '../../style/road-map/road-map-block-item.css';

function RoadMapBlockItem({title, paragraph}) {
    return (
        <li className='road_map_item_block'>
            <h1 className='road_map_item_title_desktop'>{title}</h1>
            <div className='road_map_item_line'>
                <div className='road_map_item_line_point'/>
            </div>
            <div>
                <h1 className='road_map_item_title_smartphone'>{title}</h1>
                <p className='road_map_item_paragraph'>{paragraph}</p>
            </div>
        </li>
    );
}

export default RoadMapBlockItem;