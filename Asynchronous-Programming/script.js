/* 

Application Programming Interface (API) 
- a defined set of rules that lets your app request data or actions from another system, 
without needing to know how that system works internally.

*/

/*

THE 5 COMMON HTTP METHODS - What KIND of request are you making?

GET  // "Give me data" - fetching information (most common)
POST // "Here is new data, please save it" - creating something new
PUT  // "Replace this entire thing with new data" - full update
PATCH // "Update just part of this thing" - partial update
DELETE// "Remove this data" - deleting something

THE MOST IMPORTANT HTTP STATUS CODES - What happened with your request?

200 OK            // SUCCESS! HERE IS YOUR DATA
201 Created       // SUCCESS! Your new data was created
204 No Content    // SUCCESS! Your request was successful, but there is no data to return
400 Bad Request   // You asked for something incorrectly formatted
401 Unauthorized  // You are logged in, but not allowed to do this
404 Not Found     // That resource does not exist
500 Internal Server Error  // The SERVER broke, not your fault


*/

const users = fetch("https://jsonplaceholder.typicode.com/users");

console.log(users);


/* 
"A Promise is JavaScript saying..."

"I don't have it yet...

but I promise I'll bring it."

Promise = Data is coming.
*/

/* 
So How Do We Wait?

"We need a way to tell JavaScript..."

"When the data arrives...

do this."

That is exactly what .then() means.
*/

/*
Introducing .then()


fetch("https://jsonplaceholder.typicode.com/users")
.then(...)

"Fetch the users..."

Pause...

"Then..."

Pause...

"When they arrive..."

"Do something."

That's literally what .then() means.
*/

// THE SIMPLEST FETCH CALL
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => console.log(response));

// What gets loggeed is NOT an array of users.
// It is a "Response" object - think of it as the SEALED ENVELOPE
// the waiter handed you, before you have opened it and read the letter inside.

// TO get the ACTUAL data, you must "open the envelope" with .json()
// fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => response.json()) // unwraps then envelope
    // .then((data) => console.log(data));  // NOW we see the real array of users!


/* 
    fetch() returns a RESPONSE OBJECT first --- metadata about the rewuest (status code, headers, etc. ) NOT the data itself.

    Calling .json() on the response is what actually extracts and parses the JSON body into something JavaScript can use.

*/