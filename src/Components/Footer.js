import React from 'react';
import {NavLink} from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div class="card text-center">
                
                <div class="card-body bg-dark text-light">
                    <h5 class="card-title">Made For Enjoy</h5>
                    <p class="card-text">Dev</p>
                    <NavLink to="/"><button className="btn btn-primary">Home Page</button></NavLink>
                </div>
               
            </div>
        </>
    )
}
export default Footer;