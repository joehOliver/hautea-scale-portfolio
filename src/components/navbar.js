import React from "react";
import logo from '../images/joeh-logoV2.svg';

function Navbar() {
    return (
        <nav className='flex flex-wrap md:px-10 px-6 py-5'>
            <div>
                <img src={logo} alt="JOEH" width="48"/>
            </div>
            <div className='my-auto md:pl-5 pl-4'>
                <p className='text-2xl font-bold'>Portfolio</p>
            </div>
        </nav>
    );
}

export default Navbar;