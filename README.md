This is a simple project that takes a quantity and either a metric or imperial unit of measure, and then converts the input to the equivalent value in the opposite system. While this is a straightforward concept that could easily be done with entirely front-end logic, for the purposes of learning how to build an entirely standalone full stack web application I've only included input validation logic on the front end. The input values are sent to and evaluated by an API, which then returns a JSON object that is parsed and displayed as the result. 

The front end of this app was built using React. The back end was built using JavaScript, Node, and the Express web application framework.

---TEMP INSTRUCTIONS TO START LOCALLY---
1. Need to start React app on it's own port (3000)
    -React app wasn't hitting API due to CORS not being installed and used and 2.) due
    to pointing to a 127.0.0.1:5000/api/convert?input=4gal instead of
    http://192.168.1.10:5000/api/convert?input=4gal
2. Start server.js (5000) - nodemon start or npm start

Sample serverless API endpoint: 
https://831vuq5mha.execute-api.us-east-1.amazonaws.com/dev/?input=4gal

