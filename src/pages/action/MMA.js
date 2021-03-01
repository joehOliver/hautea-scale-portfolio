import React from 'react';

import SEO from "../../components/seo";
import Navbar from "../../components/navbar";
import pic from "../../images/action/group_pic.jpg";

function MMA() {
    return (
        <>
            <SEO title="Action" />
            <Navbar title="Action"/>
            <main className="w-full">
                <section className="lg:py-16 py-12 md:w-3/4 md:px-0 px-4 mx-auto">
                    <h1 className='text-5xl md:text-6xl font-bold'>One Punch!</h1>
                    <h3 className='text-lg pl-1'>Mixed Martial Arts Training</h3>
                </section>
                <div>
                    <img src={pic} className="w-full" alt="FitX MMA Class Group Pic" />
                </div>
            </main>
        </>
    );
}

export default MMA;