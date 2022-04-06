import React, { useState } from 'react';
import './Home.css'
const Home = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={increaseCount}>Click</button>
            <h1> count {count}</h1>
            <h1>doucbel count {count * 2}</h1>
        </div>
    );
};

export default Home;