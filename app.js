const express = require('express');
const path = require('path');
const { sequelize } = require('./models/connection');


const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const memberRoutes = require('./routes/memberRoutes');
const publisherRoutes = require('./routes/publisherRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const bookAuthorRoutes = require('./routes/bookAuthorRoutes');

const app = express();
app.use(express.json());


app.use('/author', authorRoutes);
app.use('/book', bookRoutes);
app.use('/category', categoryRoutes);
app.use('/member', memberRoutes);
app.use('/publisher', publisherRoutes);
app.use('/reservation', reservationRoutes);
app.use('/review', reviewRoutes);
app.use('/bookauthors', bookAuthorRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database synced with relationships');
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
 