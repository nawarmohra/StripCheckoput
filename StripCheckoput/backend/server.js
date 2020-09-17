const express =  require('express')
const fs = require('fs')
const cors = require('cors')
const logger = require("morgan")
const path = require('path')
// require('dotenv').config()


if (process.env.NODE_ENV !== 'production') require('dotenv').config()



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//console.log(process.env.STRIPE_SECRET_KEY);
 
const app = express()

const port = process.env.PORT || 5000

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors());
let books= [];
let boks = [];
app.get("/home", function (req, res){
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(JSON.stringify(books));

})

/* //get Data
axios({
  url: '../frontend/src/components/Cart.tsx',
  // configuration
})
.then(response => {
 // do something with JSON response data
 const { data } = response
 console.log(response)
}) */


app.post("/create", function (req,res){
  const newBook = {
    amount: req.body.amount,
    name: req.body.name,
  };
  const oldBook = {
    price: req.body.price,
    name: req.body.name,
  };
  books.push(newBook);
  boks.push(oldBook);
  var json = JSON.stringify(oldBook);
  fs.appendFileSync("./orders.js", json);

})

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
    currency: 'SEK',
  };
  
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.error(stripeErr)
      res.status(500).send({ error: stripeErr.raw });
    } else {
      const order = {
        tokenId: req.body.token.id,
        amount: req.body.amount * 100,
        currency: 'SEK'
      }
      // Save cartItems to file
      boks.push(order)
      fs.appendFileSync('./orders.json',JSON.stringify (boks), (err) => {
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

