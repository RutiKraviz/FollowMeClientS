
import logo from '../images/Logo1.png'
import * as React from 'react';
import '..//Logo.css'

export default function Logo() {

    return (
        <>
           <div className="logo-container">
             <img src={logo} alt="Logo" className="logo" />
           </div>
        </>
    )
}


