import React from 'react';

import { Link } from "gatsby";
import cute from '../images/justin-cute.gif';

function Hero() {
    return (
        <main className='container grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 md:px-auto px-6 h-full w-full'>
            <div className='my-10'>
                <h3 className='mb-3'>VIEW PROJECTS</h3>
                <ul>
                    <li className='inactive md:text-6xl text-5xl md:mb-2 mb-1 font-bold cursor-not-allowed'>
                        Service
                    </li>
                    <li>
                        <Link className='md:text-6xl text-5xl md:mb-2 mb-1 font-bold borderLeftRight' to='/creativity/jardin-de-justino'>CREATIVITY</Link>
                    </li>
                    <li>
                        <Link className='md:text-6xl text-5xl md:mb-2 mb-1 font-bold borderLeftRight' to='/action/MMA'>ACTION</Link>
                    </li>
                    <li className='inactive md:text-6xl text-5xl md:mb-2 mb-1 font-bold cursor-not-allowed'>
                        Leadership
                    </li>
                    <li className='inactive md:text-6xl text-5xl md:mb-2 mb-1 font-bold cursor-not-allowed'>
                        Enhancement
                    </li>
                </ul>
                <p>
                    Robert Van Balorio <br/>
                    <span className='text-gray-400 text-sm'>SCALE Adviser</span>
                </p>
                
            </div>
            <div>
                <img src={cute} alt="Justin is cute" width="360" className='text-center mx-auto mt-2 md:mt-0'/>
                <p className='text-center'>
                    Justin Oliver E. Hautea <br/>
                    <span className='text-gray-400 text-sm'>Grade 12 - F | Batch 2021</span>
                </p>
            </div>
        </main>
    );
}

export default Hero;
