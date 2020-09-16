import React, { Component} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import StripeCheckoutButton from './stripe-button';


export interface State {
    
}


export class TotalPrice extends Component<{}, State>{

    constructor(props: {}){
        super(props)
    }
      


        render(){
            return(
                <CartConsumer>
                    {({ getTotalPrice, selectedShipping }) => (
                        <div>
                            <h2>Total price including shipping & VAT:</h2> 
                                
                            <h2> {getTotalPrice() + selectedShipping.cost} :- </h2>
                            <p> VAT: {(getTotalPrice() + selectedShipping.cost) * 0.2} :- </p>
                            < StripeCheckoutButton price = {(getTotalPrice() + selectedShipping.cost) * 0.2}/>
                        </div>
                    )}
                </CartConsumer>
            )
        }
    }
    



export default TotalPrice;