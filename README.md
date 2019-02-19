# trainee-api

In order to complete your interview, you must create the following web-app.

The application is a user management app, you will connect to an API to retrieve all the users. Your application should do the following :

- Display all the current users
- Able to delete a user
- Edit an user
- Create an user

You must use HTML/CSS/AngularJS. 
You will connect to the API at this address https://trainee-api.pleiads.fr
Here are all the routes of the API  https://trainee-api.pleiads.fr/explorer

The design of the page should be simple and user friendly.

e.g. of a route to get all users :
GET https://trainee-api.pleiads.fr/users 
It will return :
```
[
{
"id": 0,
"firstName": "Gérard",
"lastName": "Piquet",
"email": "piquet.gerard@gmail.com"
},
{
"id": 1,
"firstName": "Maurice",
"lastName": "Donald",
"email": "donald.maurice@gmail.com"
},
{
"id": 2,
"firstName": "Johnny",
"lastName": "Walker",
"email": "johnny.walker@gmail.com"
},
{
"id": 3,
"firstName": "Charles",
"lastName": "Martin-laval",
"email": "c.mlaval@gmail.com"
}
]
```
***
# Some Resources:
How to connect to an api in angularJs:
[https://tutorialedge.net/javascript/angularjs/interacting-with-apis-using-http-angularjs/]

Use of promise:
[https://blog.ippon.fr/2015/01/23/les-promesses-en-angularjs-13/]

Angular ng-repeat:
[https://docs.angularjs.org/api/ng/directive/ngRepeat]

