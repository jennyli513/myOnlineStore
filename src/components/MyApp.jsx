import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Products from './Products';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Contact from './layout/Contact';
import About from './layout/About';
import ConfirmPage from './layout/ConfirmPage';

//File: MyApp.jsx
//Author: Yanjie Li
//This is the main display component that brings together other component to create the whole application
//Use Router to move between different pages by clicking the links on navbar

class MyApp extends Component {
  
    state={
        count:0,
    }

     //this function is used to set the number badge near the shopping cart on navbar
     //passing this method to children components: navbar, Products and Carts
    countItemInCart = (itemCart) =>
    {
        //set count = the total numbers of items in the cart
        this.setState({count: itemCart.reduce((a,v) =>  a = a + v.count , 0 )});
    }

    render() {

        
        return (
            <div>
                <Router>
                    <Navbar 
                       count={this.state.count} 
                    />
                    <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/products" >
                         <Products countItemInCart= {this.countItemInCart}/>
                    </Route>
                    <Route exact path="/cart" >
                        <Cart countItemInCart={this.countItemInCart}/>
                    </Route>
                    <Route exact path="/confirm" component={ConfirmPage}></Route>
                    </Switch>
                
                    <Footer />
                </Router>
                
            </div>
        )
    }
}

export default MyApp
