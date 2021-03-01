import React from 'react';

import SEO from "../components/seo";
import Navbar from "../components/navbar";

function MMA() {
    return (
        <>
            <SEO title="Action" />
            <Navbar title="Action"/>
            <main>
                <section className="text-center">
                    <h1>One Punch!</h1>
                    <h3>Mixed Martial Arts Training</h3>
                </section>
            </main>
        </>
    );
}

export default MMA;