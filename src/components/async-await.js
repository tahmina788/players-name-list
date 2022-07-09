import React, { useState, useEffect } from 'react';
import './App.css';


function App2(){
    // data state + storage
    const [ data, setData ]   = useState([]);

    useEffect(() => {
        loadData();
        // getData();
    }, []);

    const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(receivedData => setData(receivedData));
    }
    console.log(data);
    return (
        
        <div className='App'>
            <p> Fetch / Async /</p>
        </div>
    );

}

export default App2;
