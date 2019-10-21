
# Exercise based on the example on How to GraphQL site

[How to GraphQL](https://www.howtographql.com) is a fullstack tutorial website to learn all about GraphQL! It was built by [Prisma](https://www.prisma.io) and many amazing contributors. All content on the site is completely free and open-source.

[![](http://i.imgur.com/67oYe9q.png)](https://www.howtographql.com)

##Context
This code was developed using as base the [GraphQL + NodeJs](https://www.howtographql.com/graphql-js/0-introduction/) example.

####Goal
>The goal of this tutorial is to build an API for a Hacker News clone. Here is a quick rundown of what to expect in this tutorial.
You’ll start by learning the basics of how a GraphQL server works, simply by defining a GraphQL schema for the server and writing corresponding resolver functions. In the beginning, these resolvers will only work with data that’s stored in-memory - so nothing will be persisted beyond the runtime of the server.
Because nobody wants a server that’s not able to store and persist data, you’re going to add a database layer to it. The database layer is powered by Prisma and will be connected to your GraphQL server via the Prisma client.
Once you have the database connected, you are going to add more advanced features to the API.
You’ll start by implementing signup/login functionality that enables users to authenticate against the API. This will also allow you to check the permissions of your users for certain API operations.
The next part of the tutorial is about adding realtime functionality to your API using GraphQL subscriptions.
Lastly, you’ll allow the consumers of the API to constrain the list of items they retrieve from the API by adding filtering and pagination capabalities to it.


## Technologies involved
 - NodeJs
 - GraphQL (graphql-yoga, )
 - Yarn
 - Prisma (prisma-client-lib)
 - jsonwebtoken & bcryptjs
 
 
 ##Executing
 
```
yarn install
yarn start
```

After that you can open an browser and use the address: ```http://localhost:4000``` to see the **GraphQL Playground**.