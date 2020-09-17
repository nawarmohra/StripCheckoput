import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price ,prod}) => {
const priceForStripe = price 
const prodStripe = prod 
  const publishableKey = 'pk_test_YTiOUdn5AfnIYTb7qbY94XKV00rjG4dGyO';
  const onToken = token => {
    console.log("pay")
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
        alert('succesful payment'); 
      })
      .catch(error => {
        console.log('Payment Error:', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };
  
  console.log(price)
  return (
    <StripeCheckout
      label='Pay Now'
      name='Mobil Website'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency="SEK"
    />
  );
};

export default StripeCheckoutButton;