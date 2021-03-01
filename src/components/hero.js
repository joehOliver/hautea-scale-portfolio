import React from 'react';

import { Link } from "gatsby";
import cute from '../images/justin-cute.gif';

function Hero() {
    return (
        <section className='md:container grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2 lg:mx-auto mx-0 px-6 lg:px-0 h-full'>
            <div className='mt-10 mb-8'>
                <h3 className='mb-3'>VIEW PROJECTS</h3>
                <ul>
                    <li className='inactive md:text-6xl text-5xl mb-1 font-bold cursor-not-allowed'>
                        Service
                    </li>
                    <li>
                        <Link className='md:text-6xl text-5xl mb-1 font-bold borderLeftRight' to='/creativity/jardin-de-justino'>CREATIVITY</Link>
                    </li>
                    <li>
                        <Link className='md:text-6xl text-5xl mb-1 font-bold borderLeftRight' to='/action/MMA'>ACTION</Link>
                    </li>
                    <li className='inactive md:text-6xl text-5xl mb-1 font-bold cursor-not-allowed'>
                        Leadership
                    </li>
                    <li className='inactive md:text-6xl text-5xl mb-1 font-bold cursor-not-allowed'>
                        Enhancement
                    </li>
                </ul>
                
                
            </div>
            <div>
                <img src={cute} alt="Justin is cute" width="360" className='text-center mx-auto mt-2 md:mt-0'/>
                <p className='text-center'>
                    Justin Oliver E. Hautea <br/>
                    <span className='text-gray-400 text-sm'>Grade 12 - F | Batch 2021</span>
                </p>
            </div>
            <footer>
                <p className='text-sm py-8 lg:py-4'>
                        Robert Van Balorio <span className='text-gray-400 pl-4'>SCALE Adviser</span>
                </p>
            </footer>
        </section>
    );
}

export default Hero;
