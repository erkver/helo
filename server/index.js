require("dotenv").config();

const { CONNECTION_STRING } = process.env;
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const massive = require("massive");
const { json } = require("body-parser");
const { addUser, getUser } = require('./controller')

app.use(json());
massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.post('/api/register', addUser);
app.post('/api/login', getUser);

app.listen(port, () => console.log(`Server is listening on port ${port}`));