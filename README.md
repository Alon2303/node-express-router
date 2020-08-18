# express-file-router

## How To Set Up:

1. Get the code using either: git clone | download the zip
2. In the shell, go to the location you placed the code
3. Run:
```javascript
npm install 
```

4. Run:
```javascript
node app.js
```

In your shell, you shoud see: *app is running on 3001| ENV is undefined*


## Connect with your frontend:

One of the popular tools to use for api rquest is axios
in your fronend:

```javascript
import Axios from "axios";

Axios({
    method: "GET",
    url: "http://localhost:3001/getData",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });
  
  Axios({
    method: "POST",
    url: "http://localhost:3001/postData",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });
```

To connect to your DB/storage services, follow their specific instruction(usually found in a fetting started with ... tutorials)
