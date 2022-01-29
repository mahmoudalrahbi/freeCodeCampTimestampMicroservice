# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

This project built for [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis "Back End Development and APIs") Course in [freeCodeCamp](https://www.freecodecamp.org/ "freeCodeCamp").

So basicly the API return  the current date in unix and utc format when the request go to `/api` and if the request come with specifc valid date (unix or utc) return that date with unix and utc format.

####   Examples:

###### ex. 1
request: `get /api/1451001600000`
response: `{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`

###### ex. 2
request: `get /api/2015-12-25`
response: `{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`

###### ex. 3
request: `get /api`
response: `{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`

###### ex. 4
request: `get /api/ff`
response: `{"error":"Invalid Date"}`

##### Live Dimo 
You can find the live dimo in this url https://boilerplate-project-timestamp.mr112.repl.co
