// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  //Find by field completed
  db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err)=>{
    console.log('Unable to fetch todos',err);
  });

  //Find by field ObjectID
  db.collection('Todos').find({
    _id: new ObjectID('5a91416436e117148431cbed')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //Count
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

 //Find by name
  db.collection('Users').find({name: 'Paul'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  //client.close();
});
