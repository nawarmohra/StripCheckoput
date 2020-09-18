import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {Redirect} from 'react-router-dom';




const StripeCheckoutButton = ({ price ,prod}) => {
  const [success, setsuccess] = useState(false)
  const [cancel, setcancel] = useState(false)
const priceForStripe = price 
const prodStripe = prod 
  const publishableKey = 'pk_test_YTiOUdn5AfnIYTb7qbY94XKV00rjG4dGyO';
  const onToken = token => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
        prodStripe:prodStripe

      }
    })
      .then(async response => {
        /* console.log(" test response",response) */
        setsuccess(true)
       
      })
      .catch(error => {
        console.log('Payment Error:', error);
        setcancel(true)
       
      });
  };
  
  console.log(price)
  if (success) {
    return <Redirect to='/success'/>
  
    
  } else if (cancel) {
    return <Redirect to='/fel' />
  }
  
  return (
    <StripeCheckout
      label='Pay Now'
      name='Mobil Website'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency="€"
    
    />
  );
};

export default StripeCheckoutButton;