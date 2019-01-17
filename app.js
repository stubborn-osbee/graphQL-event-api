const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { BuildSchema } = require("graphql");

const app = express();

app.get(bodyParser().json);

app.get(
  "/graphql",
  graphqlHttp({
    schema: BuildSchema(`
        type RootQuery {
         events : [String!]!

        },
        type RootMutation{
           changeEvent (name : String) : string
        }
         schema {
             query: RootQuery
             mutation: RootMutation
         }
        `),
    rootValue: {
      events: () => {
        return ["All night coding, React, GraphQl"];
      },
      createEvent: args => {
        const eventName = args.name;
        return eventName;
      }
    },

    graphiql: true
  })
);

app.listen(3000);
