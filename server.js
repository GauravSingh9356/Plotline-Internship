const express = require('express');
const sellerRouter = require('./routers/sellerRouter');
const productRouter = require('./routers/productRouter');

const app = express();

const URL = 'dummyMONGOURI';

mongoose
  .connect(URL)
  .then(() => {
    console.log('Successfull connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
