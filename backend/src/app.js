 // server create
 const express = require('express');
 const cookieParser = require('cookie-parser');
 const authRoutes = require('./routes/auth.route');
 const foodRoutes = require('./routes/food.routes');
 const foodPartnerRoutes = require('./routes/food-partner.routes');
 const cors = require('cors');

  const app = express();
  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
  }));
  app.use(cookieParser());  // as a middle ware we usse cookie parser
  app.use(express.json());

  

  app.get("/" , (req,res) => {
    res.send("Hello World");
  })

  //post man is used to develop the api or test the api
  
  app.use('/api/auth', authRoutes); // here we have creted routes but app . js dont know , basically seerver dont know show imported here and require here and here we use i but here we wrote api auth it means these api is for authentication 
  app.use('/api/food', foodRoutes);
  app.use('/api/food-partner' , foodPartnerRoutes);
  module.exports = app;
