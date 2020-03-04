# My-Places

See [DEMO](https://mymernapp.firebaseapp.com/)

#### Note 

I use herok to host my backend and that's why the pictures are only available for 30 minutes.

The Heroku filesystem is ephemeral - that means that any changes to the filesystem whilst the dyno is running only last until that dyno is shut down or restarted. Each dyno boots with a clean copy of the filesystem from the most recent deploy

### Stack
- Html
- Css
- BEM
- React
- React Router
- Context API
- NodeJS
- Express.js
- MongoDB
- Google API

## Installation

Use the package manager to install all dependencies.

#### Frontend

```
pathToRepository> cd frontend
```

then

```javascript
npm install
```
and

```javascript
npm start
```

Remember to use your data in .env file

```javascript
REACT_APP_GOOGLE_API_KEY=YOUR_API_KEY
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser

#### Backend

```
pathToRepository> cd backend
```

then

```javascript
npm install
```
and

```javascript
npm start
```

Remember to use your data in .nodemon.json file

```javascript
{
    "env": {
        "DB_USER": "YOUR_USER_NAME",
        "DB_PASSWORD": "YOUR_PASSWORD",
        "DB_NAME": "YOUR_DB_NAME",
        "GOOGLE_API_KEY": "YOUR_API_KEY",
        "JWT_KEY": "YOUR_KEY"
    }
}
```
