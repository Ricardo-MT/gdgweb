import React from 'react';
import logo from "./assets/logo.png"
import "./landing.modules.css"

const Landing : React.FunctionComponent = () => {
    return <div>
        <h1>Landing page for GDG Algeciras community portal.</h1>
        <img src={logo} alt="Logo GDG Algeciras" />
    </div>
}

export default Landing;