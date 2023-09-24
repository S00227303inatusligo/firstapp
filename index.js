const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World from Una!'))
app.get('/bananas', (req, res) => res.send('hello world, this is bananas'));
app.get('/bananas', (req, res) => res.send('hello world, this is bananas'));


var contacts = [];

app.use(express.json());

app.post('/contacts', (req, res) => {
    const contact = req.body;
  

    console.log(contact) // to check what was received
   
    contacts.push(contact);

    res.send ('contact has been added to the database');
    console.log(`contact name is ${contact.name} number of contacts is ${contacts.length}`);

});

app.get('/contacts', (req, res) => {
    res.send(contacts);
})

app.get('/contacts/:id', (req,res) => {

  let id = req.params.id; 
  res.json(contacts[id]);
})

app.delete('/contact/:id',(req, res) =>
 {
    let id = req.params.id; 
    console.log(`removing contact ${contact[id].name}`)
    contact.splice(req.params.id, 1);
    res.send(contact);

  })



  app.listen(port, () => console.log(`Example app listening on port ${port}!`))