import React from 'react';
import Radiobutton from './Radio'
import { Cart } from './Cart';
import CheckoutFracksatt from './checkoutFracksatt';
import TotalPrice from './TotalPrice';
import StripeButton from './stripe-button'
import './App.css';




function Checkout(){
        

 
    return(
        
        <div >

            <Cart/>
            <CheckoutFracksatt/>
            <Radiobutton />
            <TotalPrice/>
            < StripeButton />
            

        </div>
        
    );
}



export default Checkout;