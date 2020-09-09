const express =  require('express')
require('dotenv').config('.env')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//console.log(process.env.STRIPE_SECRET_KEY);
 
const app = express()

app.use('/api', express.json())
//use json middle ware app.use(JSON)

app.get("/api/products", async (req, res) => {
    
    const products = await stripe.products.list({
        limit: 3,
      });
    console.log(products);
    res.json(products)
    
} )

app.listen(3000,()=>console.log('Server is running on port 3000.............'));