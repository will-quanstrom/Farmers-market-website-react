import React from 'react'

function Nav(){
        const padNav = {
            padding: '25px',
            textDecoration: 'none',
            color: 'white',
            marginLeft: '115px'
        };
        const navBack = {
            backgroundColor: '#699a60',
            padding: '50px',
            borderRadius: '10px'
        };
        return (
             <div style={navBack}>
                 <nav>
                     <a href="#" style={padNav}>Home</a>
                     <a href="#" style={padNav}>About</a>
                     <a href="#" style={padNav}>Our Story</a>
                     <a href="#" style={padNav}>Contact us</a>
                 </nav>
            </div>
        );
}

export default Nav