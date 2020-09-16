import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
<<<<<<< Updated upstream
  const priceForStripe = price
  const publishableKey = 'pk_test_4TEQdfVlOd2xxbcZbKioEJP000GOEjENkH';
=======
  const priceForStripe = price 
  const publishableKey = 'pk_test_YTiOUdn5AfnIYTb7qbY94XKV00rjG4dGyO';
>>>>>>> Stashed changes

  const onToken = token => {
    console.log("pay")
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
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
<<<<<<< Updated upstream
      name='TechStore Mobile Store.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is kr${price}`}
=======
      name='Mobil Website'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
>>>>>>> Stashed changes
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency="SEK"
    />
  );
};

export default StripeCheckoutButton;