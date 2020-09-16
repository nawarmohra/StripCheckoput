import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price 
  const publishableKey = 'pk_test_4TEQdfVlOd2xxbcZbKioEJP000GOEjENkH';

  const onToken = token => {
    console.log("pay")
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(async response => {
        console.log(" test response",response)
        alert('succesful payment');
      })
      .catch(error => {

        console.log('Payment Error: ');
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;