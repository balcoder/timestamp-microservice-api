# Timestamp Microservice API
Simple timestamp api, gives time in unix and utc format

## Live Version on glitch
[timestamp-microservice-api](https://eight-football.glitch.me)

## Run on local machine
- Make sure you have node and npm installed on your machine go here [https://nodejs.org/en/](https://nodejs.org/en/)
- Clone the repo and cd into the root and run `npm install` to install all the dependencies
- This project uses express-generator and nodemon to serve the app so to start the app use  
 `npm run devstart` or if you want to see debug output in the console  on windows use  
 `set DEBUG=time-microserver:* & npm run devstart`  
 or on linux use  
 `DEBUG=time-microserver:* npm run devstart`
- This will start the app and serve it on http://localhost:3000/

## User Story
1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string).that the unix timestamp needs to be an integer (not a string) specifying milliseconds.our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
4. If the date string is valid the api returns a JSON having the structure  
{"unix": date.getTime(), "utc" : date.toUTCString()}  
{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
5. If the date string is invalid the api returns a JSON having the structure  
 {"Unix":null,"UTC":"Invalid Date"}


 ## Example Usage:

 [project url]/api/timestamp/2015-12-25  
[project url]/api/timestamp/1450137600
