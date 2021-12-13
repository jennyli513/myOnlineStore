import React, { Component } from 'react'
import './MyStyle.css'

//File: About.jsx
//This file is to create the About page which containers the Hotel description and photo gallery
class About extends Component {
    render() {
        return (
            <div className = "container">
                <div className="hotelDescription2">
                    <h1>Parc Hotel</h1>
                    
                    <p style={{textAlign:"left"}}>Exceptional service and premium amenities coupled with modern stylish apartments at Parc Hotel, offers  travellers a high level of service that will enhance any stay, whether visiting for leisure or business. All apartments provide hotel facilities to meet the needs of short-stay and long-stay visitors to Melbourne.<br />
​                    Come experience the premium amenities of our serviced apartments and enjoy the high standard of living Parc Hotel has to offer. ​<br />
​                    Take advantage of our rooftop BBQ and terrace area where you can sit back, relax and take in the exquisite views of Melbourne and the surrounding parklands.</p>      
                </div>    

               {/* photo gallery    */}
               <div className="photoContainer">
                    <div className="row row-cols-3">
                        <div className="col-md-4">
                            <img className="img-fluid img-thumbnail"  src="./images/photoGallery1.jpg" alt="gallery" style={{width:'100%',objectFit:'cover', height:'300px'}}></img>
                            <h5>ROOFTOP AND BBQ</h5>
                        </div>
                        <div className="col">
                            <img className="img-fluid img-thumbnail" src="./images/photoGallery2.jpg" alt="gallery" style={{width:'100%',objectFit:'cover', height:'300px'}}></img>
                            <h5>RESTAURANT CHARGE BACK</h5>
                        </div>
                        <div className="col">
                            <img className="img-fluid img-thumbnail" src="./images/photoGallery3.jpg" alt="gallery" style={{width:'100%',objectFit:'cover', height:'300px'}}></img>
                            <h5>COMPLIMENTARY WIFI</h5>
                        </div>
                        <div className="col">
                            <img className="img-fluid img-thumbnail" src="./images/photoGallery4.jpg" alt="gallery" style={{width:'100%',objectFit:'cover', height:'300px'}}></img>
                            <h5>RESTAURANT DINNER</h5>
                        </div>
                        <div className="col">
                            <img className="img-fluid img-thumbnail" src="./images/photoGallery5.jpg" alt="gallery" style={{width:'100%',objectFit:'cover', height:'300px'}}></img>
                            <h5>LUXURY SHOPPING</h5>
                        </div>
                        <div className="col"> 
                            <img className="img-fluid img-thumbnail" src="./images/photoGallery6.jpg" alt="gallery" style={{width:'100%',objectFit:'cover', height:'300px'}}></img>
                            <h5>RELAXT AND FLEXIBLE</h5>
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}

export default About
