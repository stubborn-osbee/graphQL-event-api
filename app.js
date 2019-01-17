const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { BuildSchema } = require("graphql");
const app = express();

app.get(bodyParser().json);

app.get("/graphql", graphqlHttp());

app.listen(3000);
