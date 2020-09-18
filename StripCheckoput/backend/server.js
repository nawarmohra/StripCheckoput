const express =  require('express')
const fs = require('fs')
const path = require('path')
require('dotenv').config()


if (process.env.NODE_ENV !== 'production') require('dotenv').config()



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//console.log(process.env.STRIPE_SECRET_KEY);
 
const app = express()

const port = process.env.PORT || 5000

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}


app.post('/payment', (req, res) => {
  
  const body = {
    source: req.body.token.id,
    amount: req.body.amount * 100,
    data: req.body.data,
    currency: 'sek'
  };
  console.log(body)
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.error(stripeErr)
      res.status(500).send({ error: stripeErr.raw });
    } else {
      // Save cartItems to file
      fs.appendFileSync('./orders.json',JSON.stringify (req.body), (err) => {
        if (err) {
          throw err;
        }

      })
      res.status(200).send({ success: stripeRes });
    }
  });
});


app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});



