import React from 'react';
import { useNavigate } from 'react-router-dom';
// version 5 react-router dom
// import { useHistory } from 'react-router-dom'; 




const AboutUs = () => {
    // history = useHistory()
    // history.push("/")
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/', { replace: true });
    }
    return (
        <div>
            <h1>AboutUs</h1>
            <button onClick={clickHandler}>Go Home</button>
        </div>
    )
}

export default AboutUs