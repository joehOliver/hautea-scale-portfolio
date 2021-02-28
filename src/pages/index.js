import React from "react";
import { Link } from "gatsby";

import logo from "../images/joeh-logoV2.svg";
import SEO from "../components/seo";

const IndexPage = () => (
    <><SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={logo} alt="JOEH"/>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
)

export default IndexPage
