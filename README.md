# StripCheckoput

The website must be created using Create-React-App and Typescript. The website shall consist of a start page where all products are listed, a product page where a selected product is displayed and a check-out page where the customer has the opportunity to complete their purchase.


# Description of how the project is built
We have 2 files :
## Frontend file

ReactJS
Typescript
NodeJS
Stripe

### install
yarn add typescript, Or npm install -g typescript
npm install or yarn install (must always run before first start or when changing source code)

yarn add --dev @testing-library/jest-dom
yarn add @testing-library/user-event @testing-library/dom --dev
yarn add antd
yarn add --dev jest
npm install react react-dom
npm install --save react-router
yarn add react-stripe-elements
yarn add stripe
yarn add axios
npm install react-stripe-checkout


npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

Our group has chosen (Ant Design) design system for our project.

## Backend file

Express
NodeJS
Axios 
FS system

### Payment service (Backend)

Stripe

### install
npm install express
npm install axios
npm install react-stripe-checkout (Stripe's Checkout makes it almost too easy to take people's money. This should make it even easier if you're building a react application.)
npm install body-parser
yarn add dotenv or npm install dotenv
npm install --save path


# To start the project

- To run the project, you also need to put the security key in Stripe in the .env file, and put the * Publishable key * in the stripe-button component in the front row on line 14



- We have created a script to run both backend and frontend at the same time by typing just in Terminal: 
cd backend
yarn dev
yarn dev 

then run backend and frontend in the same time.

This code is in package.json backend:

"scripts": {
"frontend": "cd ../frontend && yarn start",
"backend": "nodemon server.js",
"build": "cd frontend && npm run build",
"dev": "concurrently --kill-others-on-fail \" yarn backend \ "\" yarn frontend \ "",
"start": "node server.js"
 },

 

Scroll to http: // localhost: 3000 (if the page does not open automatically)


