import React from 'react';
import './Activity.css'
const Activity = ({ activity }) => {
    const { title, img, taskId } = activity;
    return (

        <div className='volunteer'>

            <h3>{taskId}</h3>
            <img src={img} alt="" />
            {/* <img src="https://imgur.com/gvMTF0U.png" alt="" /> */}
            <h3>{title}</h3>
        </div>
    );
};

export default Activity;