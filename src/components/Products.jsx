import React, { Component } from 'react'
import ItemCard from './ItemCard';
import './layout/MyStyle.css';
import { getProducts } from '../services/ProductAPI';

//file: Products.jsx
//This file is to Create the shop page with all the products information from ProductAPI
//One function in this component: addToCart()
//addToCart() function will take one parameter which is id
//This function will add item into itemCart and also store the data in LocalStorage

class Products extends Component {
    state = {
        itemCart: [],
        products: getProducts(),
    }


    //This function is to add item into cart
    //First, read localstorage to check if there are any data stored 
    //if there is nothing in localstorage, create a newline = {count:1, product:newItem} in itemCart
    //if there is something already stored in localstorage
    //loop through the exist items in the localstorage
    //check if the new item id is equal to any exsit item id
    //if they are equal, the item already exist in the itemCart, break the iteration
    //just increase the count of the item and update the itemCart
    //if not equal, create a newLine and update the itemCart
    //also need to getting props from MyApp to update the numbers of items in shopping cart on navbar
    addToCart = (id) =>
    {  
        console.log(id);
        //Try reading localStorage;
        var ItemInCart = false;
        var existItem;
        var newItem;
        var newLine;
        var itemCart;
        console.log("local storage:",localStorage.getItem("mycart"))
        //if there are nothing in localstorage
        if(localStorage.getItem("mycart") === null)
        {
           //create a new item
            newItem = this.state.products.filter((item) => item.id === id)
            console.log("new item:", newItem);
            //Create a newLine of item
            newLine = {count:1, product:newItem};
            //add this item to itemCart
            itemCart = this.state.itemCart.concat(newLine);
            //update itemCart
            this.setState({ itemCart });
            console.log("itemCart:", itemCart);
            //save to localstorage
            localStorage.setItem("mycart", JSON.stringify(itemCart));
            //getting props from MyApp to update the number of items in shopping cart on navbar 
            this.props.countItemInCart(itemCart);
        }
       else //if there are data stored in localstorage
       {
           //retrieve the data
           existItem = JSON.parse(localStorage.getItem("mycart"));
           console.log("existItem", existItem)
           newItem = this.state.products.filter((item) => item.id === id)

           ItemInCart = false;
           //loop through the existItem
           for (var i = 0; i < existItem.length; i++)
           {
               //if new item id is euqal to any exist item id
            if(id === existItem[i].product[0].id)
            {
                ItemInCart = true;
                //increate the count of existItem
                existItem[i].count ++;
                //save to localstorage
                localStorage.setItem("mycart", JSON.stringify(existItem));
                console.log("exist",existItem);
                //update itemCart
                this.setState({ itemCart: existItem });
                console.log("item cart", this.state.itemCart);
                //getting props from MyApp to update the number of items in shopping cart on navbar 
                this.props.countItemInCart(existItem);
                    break;                      
            }
           }
           //if new item id was not found in the itemCart
           if(!ItemInCart) 
           {
                //create a new line of item
                newLine = {count:1, product:newItem};
                //add to the itemCart
                itemCart = existItem.concat(newLine);
                //update itemCart
                this.setState({ itemCart });
                console.log("itemCart:", itemCart);
                //save to localstorage
                localStorage.setItem("mycart", JSON.stringify(itemCart));
                //getting props from MyApp to update the number of items in shopping cart on navbar 
                this.props.countItemInCart(itemCart);
           }
       }

    }
    
    render() {
        return (
            <div>
                <div className="container">
                  <div className="row row-cols-3">
                   {/*Mapping the products*/}
                   {/*display the products information*/}
                    {this.state.products.map((p) => (

                        <div className="col"  key={p.id} style={{padding:'10px'}} >
                            {/*passing props to ItemCard*/}
                            <ItemCard 
                            image={p.image} 
                            name={p.name} 
                            info={p.info} 
                            price={p.price}
                            id={p.id}
                            onAdd={this.addToCart} /> 
                        </div>
                    ))}
                   </div>
    
                 </div>
                
            </div>
        )
    }
}

export default Products
