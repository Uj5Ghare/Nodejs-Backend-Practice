import express from 'express';


// Next initialize the application
const app = express();

// routing path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/v1',(req, res) => {
    res.send("this is sent responce")
    console.log("this is first version of the application");
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.listen(5000, () => {
    console.log("logs started on 5000")
});