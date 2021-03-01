import React from "react";

import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

const IndexPage = () => (
    <main className='max-h-screen overflow-x-auto'>
      <SEO title="Home" />
      <Navbar title="Portfolio"/>
      <Hero></Hero>
    </main>
)

export default IndexPage
