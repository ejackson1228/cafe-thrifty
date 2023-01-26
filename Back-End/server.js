const express = require('express');
const path = require('path');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //parses incoming requests with urlencoded payloads i.e. name: "name", data: "data", etc.

