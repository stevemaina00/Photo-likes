import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


function Nav(){
    return(
        <div>
            <ul className="Nav">
                <li>Blake Photography App</li>
                <li>Home</li>
                <li a href="./App">Vote</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}
export default Nav;