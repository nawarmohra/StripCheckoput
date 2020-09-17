import React, { Component } from 'react';
import { CartConsumer, ContextState } from './context/cartContext';
import StripeCheckoutButton from './stripe-button';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';


export interface State {

}

export class TotalPrice extends Component<{}, State>{

    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <CartConsumer>
                {(contextData: ContextState) => {
                   let inCart: number[] = [];
                    contextData.cartItems.map((product) => {
                        
                       console.log("contextData.cartItems",contextData.cartItems)
                       
                    })
              
                    return (
                        <div>
                            <h2> {contextData.getTotalPrice() + contextData.selectedShipping.cost} :- </h2>
                            <p> VAT: {(contextData.getTotalPrice() + contextData.selectedShipping.cost) * 0.2} :- </p>
                         
                            <StripeCheckoutButton price = {contextData.getTotalPrice() + contextData.selectedShipping.cost} prod={contextData.getCartItem()}/>
                        </div>
                    )

                }}
            </CartConsumer>
        )
        /*             return(
                        <CartConsumer>
          
                            {({ getTotalPrice, selectedShipping ,addProductToCart}) => (
                             
                                
                                <div>
                                       console.log("cartItemsssssssssssssssssssssss");
                                    <h2>Total price including shipping & VAT:</h2> 
                        
                                    <h2> {getTotalPrice() + selectedShipping.cost} :- </h2>
                                    
                                    <p> VAT: {(getTotalPrice() + selectedShipping.cost) * 0.2} :- </p>
                           
                                    < StripeCheckoutButton price = {getTotalPrice() + selectedShipping.cost}/>
                                </div>
                            )}
                        </CartConsumer>
                    ) */
    }
}




export default TotalPrice;