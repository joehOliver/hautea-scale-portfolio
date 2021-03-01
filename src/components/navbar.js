import React from "react";
import { Link } from "gatsby";
import logo from '../images/joeh-logoV2.svg';

function Navbar(props) {
    return (
        <nav className='flex flex-wrap md:px-10 px-6 py-5'>
            <Link to='/'>
                <img src={logo} alt="JOEH" width="48"/>
            </Link>
            <div className='my-auto md:pl-5 pl-4'>
                <p className='text-2xl font-bold'>{props.title}</p>
            </div>
        </nav>
    );
}

export default Navbar;