import React, { Component } from 'react';
import {CartConsumer, ContextState } from './context/cartContext'; 
import './App.css';


export interface State {
    
}

class Success extends Component<{}, State>{
 
    constructor(props: {}){
        super(props)

    }
    
    render(){
        return(
            <CartConsumer>
            {(contextData: ContextState) => {
                /* contextData.emptyCart() */
                localStorage.clear();
                
            return(
                <h1>Success</h1>
            )
            }}
            </CartConsumer>
        );
    } 
}

 
export default Success;


