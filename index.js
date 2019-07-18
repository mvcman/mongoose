const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';

const connect = mongoose.connect(url, { useNewUrlParser: true});

connect.then((db) => {
  console.log("Connected to server!");
  Dishes.create({
    name: 'Uthappizza',
    description: 'test'
  })
  .then((dish) => {
    console.log(dish);

    return Dishes.findByIdAndUpdate(dish._id, {
      $set: { description: 'Updated test'}
    }, {
      new: true
      }).exec();
  })
  .then((dishes) => {
    console.log(dishes);
    dishes.comments.push({
      rating: 5,
      comment: 'Very nice dish!',
      author: 'mandar'
    });
    return dishes.save();
  })
  .then((dish) => {
    console.log(dish);
    // return Dishes.deleteOne({});
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
});
