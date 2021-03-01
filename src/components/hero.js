import React from 'react';

import { Link } from "gatsby";
import cute from '../images/justin-cute.gif';

function Hero() {
    return (
        <main className='container grid grid-cols-2 gap-4 mx-auto my-10'>
            <div>
                <h3 className='mb-3'>VIEW PROJECTS</h3>
                <ul>
                    <li className='inactive md:text-6xl text-3xl font-bold'>
                        Service
                    </li>
                    <li>
                        <Link className='md:text-6xl text-3xl font-bold hover:img-background-a' to='/creativity/jardin-de-justino'>Creativity</Link>
                    </li>
                    <li>
                        <Link className='md:text-6xl text-3xl font-bold hover:img-background-a' to='/action/MMA'>Action</Link>
                    </li>
                    <li className='inactive md:text-6xl text-3xl font-bold'>
                        Leadership
                    </li>
                    <li className='inactive md:text-6xl text-3xl font-bold'>
                        Enhancement
                    </li>
                </ul>
            </div>
            <div>
                <img src={cute} alt="Justin is cute" width="360"/>
            </div>
        </main>
    );
}

export default Hero;
