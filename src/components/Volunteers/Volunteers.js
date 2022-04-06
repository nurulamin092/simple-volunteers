import React from 'react';
import useVolunteers from '../../hooks/userVolunteers';
import Activity from '../Activity/Activity';
import './Volunteers.css'
const Volunteers = () => {
    const [volunteers] = useVolunteers();
    return (
        <div>
            <h1>All Volunteers</h1>
            <div className='volunteers-container'>
                {
                    volunteers.slice(0, 6).map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    >
                    </Activity>)
                }
            </div>

        </div>
    );
};

export default Volunteers;