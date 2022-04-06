import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/userVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'
const Main = () => {

    const [volunteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = (event) => {
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.toLowerCase().includes(searchText))
        setSearchResult(match)
    }

    return (
        <div>
            <h2> Volunteers Activities :{volunteers.length}</h2>
            <div style={{ 'margin': '20px' }}>
                <input onChange={handleSearchChange} type="text" placeholder='search' />
            </div>
            <div className='volunteers-container'>
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    >
                    </Activity>)
                }
            </div>
        </div >
    );
};

export default Main;