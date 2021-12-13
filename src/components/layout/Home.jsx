import React, { Component } from 'react'
import './MyStyle.css';
import {Link}  from "react-router-dom";

//File: Home.jsx
//This file is to create the home page
//It contains photo slider, hotel description, online booking form and news update for the hotel

class Home extends Component {


    render() {

       
        return (
            
         <div className = "container">

            {/* slider */}

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{height:'500px'}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./images/slide1.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}></img>
                    </div>
                    <div className="carousel-item">
                    <img src="./images/slide2.jpg" className="d-block w-100" alt="..."style={{height:'500px'}}></img>
                    </div>
                    <div className="carousel-item">
                    <img src="./images/slide3.jpg" className="d-block w-100" alt="..."style={{height:'500px'}}></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

         
              {/* hotel description and photo */}

              <div className="hotelDescription1">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{textAlign:'center'}}>Parc Hotel</h1>
                            <p style={{textAlign:'left'}}>Just 14km from Melbourne’s CBD and moments from vibrant Northern suburbs resides Parc Hotel, a truly one of a kind apartment hotel. Parc Hotel seamlessly integrates stylish apartment living with peerless residential and public amenities to create an encounter that is prestigious, convenient and with social integrations will lift the guest experience to a whole new level creating a truly unique serviced apartment experience.<br/>
                            <br/>
                            Parc Hotel is a standout amongst apartment hotels in North Melbourne, with close links to La Trobe and the nearby RMIT university. It is a place that fosters thought, achievement and a life of health and wellbeing, whilst still providing high levels of connectivity and convenience which has long been the hallmark of Melbourne living.</p>

                        </div>
                        <div className="col-md-6">
                           <img src="./images/live.jpg" alt="Hotel Pic" width='100%' style={{paddingTop:'10px'}}></img>
                        </div>
                    </div>
             </div>
               
               {/*booking form */}
                <div className="newsAndBooking" style={{paddingBottom:'25px', paddingTop:"20px"}}>
                  <div className="row">
                    <div className="col-md-6">
                     <h3 style={{textAlign:'center'}}>Make your booking now</h3>
                     <form style={{width:'85%',paddingLeft:'10px'}}>
                        <div class="mb-3">
                            <label for="exampleInputFirstName" class="form-label">First name</label>
                            <input type="firstname" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp"></input>
                       </div>
                        <div class="mb-3">
                            <label for="exampleInputLastName" class="form-label">Last name</label>
                            <input type="lastname" class="form-control" id="exampleInputLastName"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputCheckIn" class="form-label">Check-in Date</label>
                            <input type="date" class="form-control" id="exampleInputCheckIn" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputCheckOut" class="form-label">Check-out Date</label>
                            <input type="date" class="form-control" id="exampleInputCheckOut" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail" class="form-label">Email address</label>
                            <input type="emmail" class="form-control" id="exampleInputEmail" required></input>
                        </div>
                        <Link to="confirm">
                            <button className="btn btn-dark">Submit</button>
                        </Link>
                    </form>

                    </div>
                   {/*News update */}
                    <div className="col-md-6">
                       <h5>COVID-19 UPDATE FOR HOTEL GUESTS</h5>
                            ​ <p style={{textAlign:'left'}}>During this time of uncertainty due to the COVID-19 outbreak, Parc Hotel Group assures you that your safety and comfortable accommodation experience remains our highest priority. We would like to express our sympathy for those affected both nationally and globally and acknowledge the hard work being done by exceptional members of our communities.<br/>
                            
                            Please find below an update on what we as a responsible accommodation provider is doing to ensure you can rely on us to give you the flexibility you need when booking and give you the most comfortable stay each time you visit. <br/>
                            
                            Reservations with Parc Hotel Group:<br/>

                            New reservations: We understand the need for flexibility in your travel plans, it’s what we do! Our flexible rates and special rates will now allow you to cancel up to 24 hours prior to your arrival. This is valid for bookings made directly with the hotel, from our brand website <a href="https://www.parchotel.com.au/">(www.parchotel.com.au)</a>.<br/>

                            ​</p>
                    </div>

                 </div>

            </div>


    </div>
        )
    }
}

export default Home
