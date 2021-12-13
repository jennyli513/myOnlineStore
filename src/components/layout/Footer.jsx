import React, { Component } from 'react';
import './MyStyle.css';

//This is the footer component
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p> 1091 Plenty RD Bundoora , Melbourne VIC 3083 Australia</p>
                <p>Tel: (03) 9002 5100 </p>
                <p>Email: reservations@parchotel.com.au</p>
                
            </div>
        )
    }
}

export default Footer;
