import React, { Component} from 'react';
import Counter from './Counter';
import {Link}  from "react-router-dom";

//File: Cart.jsx
//Author: Yanjie Li
//This file is to Create the Cart page
//After the component is rendered, call the componentDidMount() function
//componentDidMount() function will retrieve the data from local storage and update the component state
//Function handleIncrement, handleDecrement and handleDelete will pass to children component: Counter 
//handleIncrement: will take a parameter- counter and increment the item quantity
//handleDecrement: will take a parameter- counter and decrement the item quantity
//if the counter.count <= 0, the item will be removed from the cart
//handleDelete:  will take a parameter - counter and remove the item from the cart
class Cart extends Component {

    state={
        itemCart: [],
        counters: [
        ]
        
    }
   
    //Retrieve data from localstorage
    //update itemCart
    componentDidMount(){
        var itemCart;
            const itemInStorage = JSON.parse(localStorage.getItem("mycart"));
            if(itemInStorage === null)
            {
                this.setState({ itemCart : []});
                console.log("items:", itemCart);
            }
            else
            {
                itemCart = this.state.itemCart.concat(itemInStorage);

                this.setState({ itemCart });
                console.log("items:", itemCart);
                //call function processItemCart
                this.processItemCart(itemCart);
            }  
        }
        //This function has one paremeter : itemCart 
        //Loop through itemCart to create the counters:[count, id] 
        //using count and product id of itemCart 
        processItemCart = (itemCart) => {
            var counters = [];

            itemCart.forEach((x, i) => 
            {
                counters.push({count: x.count, id: x.product[0].id});    
                console.log(x.count + "," + x.product[0].id);
                console.log(counters);
            });

            this.setState({counters: counters});
        };

        //when user clicks the "+" button, the quality of the item will increment
        //take one parameter : counter
        //this function will increase the quantity of the item
        //and update counters and itemCarts 
        //and also update the number of items in shopping cart on navbar
        handleIncrement = counter =>
        {
            //copy the current state into the counters variable
            //...is the spread operator
            const counters = [...this.state.counters];
            //get our index
            const index= counters.indexOf(counter);
            //copy the value
            counters[index] = {...counter};
            //increase our value
            counters[index].count ++;
            //save to the state
            this.setState({counters});
            const itemCart = [...this.state.itemCart];;
            //increase the item quantity according to the counters
            itemCart[index].count = counters[index].count;
            //update itemCart
            this.setState({itemCart});
            //save to local storage
            localStorage.setItem("mycart", JSON.stringify(itemCart));
            //getting props from MyApp to update the number of items in shopping cart on navbar
            this.props.countItemInCart(itemCart);
            
        }

        //when user clicks the "-" button, the quantity of the product will decrement
        handleDecrement = counter =>
        {
            const counters = [...this.state.counters];
            const index= counters.indexOf(counter);
            counters[index] = {...counter};
            //decrease value
            counters[index].count --;
            //if count <=0, remove this item from the cart
            if(counters[index].count <= 0)
            {
                counters.splice(index, 1);
                this.setState({counters});
                const itemCart = [...this.state.itemCart];
                itemCart.splice(index,1);
                localStorage.setItem("mycart", JSON.stringify(itemCart));
                this.setState({itemCart});
                //getting props from MyApp to update the number of items in shopping cart on navbar
                this.props.countItemInCart(itemCart);
               
            }
           else //if counter > 0, update itemCart and Counters
           {
                this.setState({counters});
                const itemCart = [...this.state.itemCart];
                //set itemCart count
                itemCart[index].count = counters[index].count;
                localStorage.setItem("mycart", JSON.stringify(itemCart));
                this.setState({itemCart});   
                 //getting props from MyApp to update the number of items in shopping cart on navbar
                this.props.countItemInCart(itemCart);
           }
           
        }
        //When user clicks delete button, the item will be deleted from the shopping cart
        handleDelete = (counter) =>
        {
            const counters = [...this.state.counters];
            const index= counters.indexOf(counter);
            counters[index] = {...counter};
            //remove this counter 
            counters.splice(index, 1);
            //save to the state
            this.setState({counters});
            const itemCart = [...this.state.itemCart];
            //remove this item
            itemCart.splice(index,1);
            //save to local storage
            localStorage.setItem("mycart", JSON.stringify(itemCart));
            this.setState({itemCart});   
            //getting props from MyApp to update the number of items in shopping cart on navbar
            this.props.countItemInCart(itemCart);    
        };
    
    //create renderProducts() function, this function tests to see if there are products in the array
    renderProducts()
    {
        if(this.state.itemCart.length === null) //if no products, display the message
            return(<p>There is no product in the shopping cart</p>) 
        //if there are products in itemCart
        return (
            <div className="container" style={{paddingBottom:'25px'}}>   
                    <div className="cardItemsHeader">
                        <h1>Cart items</h1>
                      {/*display the item quantity in the cart*/}
                        <h5>There are {this.state.itemCart.reduce((a,v) =>  a = a + v.count , 0 )} products in the shopping cart</h5>
                    </div>
                    <div className="cartTable">
                        <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                            <th scope="col-md-3">Product</th>
                            <th scope="col-md-1">name</th>
                            <th scope="col-md-4">Quantity</th>
                            <th scope="col-md-2">Price</th>
                            <th scope="col-md-2">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*Mapping the itemCart*/}
                            {/*Display the items into the table*/}
                        {this.state.itemCart.map((p,index) =>    
                        ( 
                            <tr key={p.product[0].id}>
                            <td><img src={p.product[0].image} alt="product" height="80px" width="80px"></img></td>
                            <td>{p.product[0].name}</td>
                            <td>
                             {p.count}
                             {/*passing props to Counter*/}
                                <Counter
                                    counter={this.state.counters[index]}
                                    onDelete={this.handleDelete}
                                    onIncrement={this.handleIncrement}  
                                    onDecrement={this.handleDecrement}                             
                                /></td>
                             <td>${p.product[0].price}</td>
                            {/*display subtotal price*/}
                            <td>${p.count * p.product[0].price}</td>
                            </tr>
                        )                  
                        )}       
                            <tr>
                            <th scope="row"></th>
                            <td colSpan="3">Total Price</td>
                              {/*Calculate total price*/}
                            <td>${this.state.itemCart.reduce((a,c )=> (a+c.count*c.product[0].price), 0)}</td>          
                            </tr>
                        </tbody>
                        </table>
                        </div>   

                        <div >
                              {/*link to shop page*/}
                           <Link to="/Products" style={{float:'left'}}>Continue shopping</Link>
                           <Link to="confirm">
                             {/*Link to confirm page*/}
                            <button className="btn btn-dark" style={{float:'right'}}>Check out</button>
                            </Link>
                        </div>         
            </div>
        )
    }


    render(){
       
        return(
            <div>{this.renderProducts()}</div>
        ) 
       
     }
}

export default Cart
