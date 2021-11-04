import React from 'react'
import Typed from "react-typed"

const Header = () => {

    
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Logan Verghese</h1>
                <Typed 
                    className="typed-text"
                    strings=
                    {["My React Portfolio"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
               
            </div>

        </div>
    )
}

export default Header
