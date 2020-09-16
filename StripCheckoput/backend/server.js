const express =  require('express')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
require('dotenv').config()


if (process.env.NODE_ENV !== 'production') require('dotenv').config()



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//console.log(process.env.STRIPE_SECRET_KEY);
 
const app = express()

const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}


app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  
  const body = {
    source: req.body.token.id,
    amount: req.body.amount * 100,
    currency: 'SEK'
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
        // data.toArra()

      })
      res.status(200).send({ success: stripeRes });
    }
  });
});




//app.use('/api', express.json())
//use json middle ware app.use(JSON)

/* app.get("/api/products", async (req, res) => {
    
    const products = await stripe.products.list({
        limit: 3,
      });
    console.log(products);
    res.json(products)
    
} ) */

