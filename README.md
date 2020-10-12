# What's this?
This is a demo project created while following the [Build A Restful Api With Node.js Express & MongoDB](https://www.youtube.com/watch?v=vjf774RKrLc).

I did this tutorial as a followup after [dotnet-core-mvc-rest-api](https://github.com/knee-cola/dotnet-core-mvc-rest-api) to compare two technologies.

# NPM Packages
* `express` - web server
* `nodemon` - watches for source changes & restarts node app
* `mongoose` - client for MongoDB
* `body-parser` - parses request JSON body into object

# Express Notes
Messages in Express are processed via a simple pipeline consisting of
* `middleware` = functions which are called first and which can modify request
* `route handlers` = functions registered to be called for a specific route and request type

## Express Middleware
Middleware is registered via `add` method of the Express.
In this example we use two middlewares:
* `bodyParser` - converts requst body (JSON) into JavaScript objects
* `router` - calls route handlers

## Express router
Route handler functions are registered via a method named after the corresponds HTTP request type:
* `post` = POST request handler
* `get` = GET request handler
* `delete` = DELETE request handler
* etc...

While registering a handler we specify the URL to which the handler will respond. The URL string can contain parameter placeholders which will get passed to the requst handler function.

## Sending response
Response is sent to client via `resp` object which is passed to the handler function as an argument.

Here's an example showing how to respond with HTTP status 200 and a JSON response type:
```javascript
resp.status(200).json(savedPost);
```

# MongoDB
Mongoos npm package is used to access the MongoDB database.

Querying is done via a *model* object of type `Schema`.
In model we describe the structure of the record stored in the DB, while the `Schema` methods we can use to query the database. Here are a few examples:
* `save` - adds record to the database
* `deleteOne` - deletes one record from the database
* `find` - finds a record in the DB
