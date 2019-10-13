
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sundareswar:iamgreat@cluster0-bv1jr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,
    { server: {
    // sets how many times to try reconnecting
    reconnectTries: Number.MAX_VALUE,
    // sets the delay between every retry (milliseconds)
    reconnectInterval: 1000},
    useUnifiedTopology: true,
    useNewUrlParser: true });

client.connect(err => {
    if(!err){
  //const collection = client.db("test").collection("devices");
  var db;
  db=client.db("test");
  // perform actions on the collection object
  
    const express=require('express');
    const app=express();
    const bodyParser=require('body-parser');

    app.listen(3000, () => {
        console.log('listening on 3000')
      })
    
      app.use(bodyParser.urlencoded({extended:true}));
    
    
    
    
    
    
      app.post('/quotes', (req, res) => {
          db.collection('quotes').insertOne(req.body, (err, result) => {
            if (err) return console.log(err)
        
            console.log('saved to database')
            res.redirect('/')
          })
        })
      
      
      
      /*
      app.get('/',(req,res)=>
      {res.sendFile('C:/users/parul/desktop/project_test/index.html');
      }
      );
      */



 
      app.set('view engine','ejs');
      


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
        //res.render(view,locals);

      app.post('/quotes',(req,res)=>
      {console.log(req.body);
      });
      
      
      console.log('Connected');
    
  
  
  
  client.close();
}

else 
console.log(err)
});






