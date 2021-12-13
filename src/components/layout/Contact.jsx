import React, { Component } from 'react'
import './MyStyle.css'
import {Link}  from "react-router-dom";

//File: Contact.jsx
//This file is to create the Contact us page
//It contains hotel address, google map for the Hotel and a contact form
//when clicks on the "Submit" button on the form, will direct to Confirm page
class Contact extends Component {
    render() {
        return (
            <div className="container">
                 <div className="row">
                   <div className="col-md-4">
                        <div className="infoDetails">

                            <h5> PARC HOTEL </h5>
                            <p>1091 Plenty RD Bundoora , Melbourne VIC 3083 Australia <br/>
                                Tel: (03) 9002 5100<br/>
                                Email: reservations@parchotel.com.au</p>
                         </div>
                        {/* Contact form*/}
                        <div className="contactForm">
                            <form >
                                <div className="mb-8">
                                    <label htmlFor="exampleInputFirstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="exampleInputFirstName" ></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputLastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="exampleInputLastName"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="exampleInputEmail"></input>
                                </div>
                                <Link to="confirm">
                                    <button className="btn btn-dark">Submit</button>
                                </Link>
                            </form>
                        </div>

                </div>
                {/* Google map */}
                <div className="col-md-8">           
                    <iframe title= "map" sstyle={{width:'100%',objectFit:'cover', height:'300px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.4399822289593!2d145.0475300146773!3d-37.70934912977137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad648aace7193f3%3A0x764521a9120f3644!2s1091%20Plenty%20Rd%2C%20Bundoora%20VIC%203083!5e0!3m2!1sen!2sau!4v1630814277400!5m2!1sen!2sau" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
           </div>     
     </div>
        )
    }
}

export default Contact
