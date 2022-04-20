const express = require('express');
const app = express()
const port = 3000
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
})

app.get('/ex1', (req, res) => {
    res.sendFile(`${__dirname}/views/ex1.html`);
})

app.get('/ex2', (req, res) => {
    res.sendFile(`${__dirname}/views/ex2.html`);
})

app.get('/ex3', (req, res) => {
    res.sendFile(`${__dirname}/views/ex3.html`);
})

app.post('/ex1/form', (req, res) => {
    if (!req.body.email || !req.body.name) {
        return res.status(500).send();
    }
    return res.status(200).send(`${req.body.name}, Thank you for your order. We will keep you posted on delivery status at ${req.body.email}`);
})

app.post('/api/countries', (req, res) => {
    if (!req.body.name || !req.body.countries) {
        return res.status(500).send();
    }
    return res.status(200).send(`Your name is ${req.body.name} and you visited ${req.body.countries.length} countries. Keep traveling !`)
})

var articles = [];

app.post('/articles', (req, res) => {
    if (!req.body.title || !req.body.content) {
        return res.status(500).send();
    }

    const ids = articles.map(object => {
        return object.id;
    });

    var obj = {
        ...req.body,
        id: ids.length ? Math.max(...ids) + 1 : 0
    }
    articles.push(obj);
    return res.status(200).send(`New article added successfully with title "${obj.title}" and ID ${obj.id} !`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})