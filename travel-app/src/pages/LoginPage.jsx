import React from "react";
import {useHistory} from "react-router-dom"; 

function LoginPage () {
    let history = useHistory();


    return (
        <div>
            <input type="text" placeholder = "Username" />
            <input type="text" placeholder = "Password" />
            <button onClick={ () => {
                history.push('/profile');
            }}> Login </button>
        </div>
    )
}