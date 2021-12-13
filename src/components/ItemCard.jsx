import React, { Component } from 'react';
//import Counter from './Counter';
import './layout/MyStyle.css';
//import { getProducts } from '../services/ProductAPI';

//File: ItemCart.jsx
//This file is to create an item card to display the product information
//The data was passed by parent Component Products

class ItemCard extends Component {

    render() {
      
        return (
            <div className="itemcard">
               <div className="card overflow-hidden shadow" style={{width:'100%',objectFit:'cover', height:'400px'}}>
                  <img className="card-img-top img-fluid" src={this.props.image} alt="Cardcap"style={{width:'100%',objectFit:'cover', height:'200px'}}></img>
                   <div className="card-body">
                       <h5 className="card-title">{this.props.name}</h5>
                       <p className="card-text">{this.props.info}</p>
                       <p className="card-title">$ {this.props.price}</p>
                       <div className="counterAndAdd">
                         <div className="buttons">
                             {/* This function was passed by parent components Products: take product id as a parameter */}
                           <button className="btn btn-dark" onClick={()=>this.props.onAdd(this.props.id)}>Add to cart</button>
                         </div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default ItemCard;
