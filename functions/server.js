// YOUR_BASE_DIRECTORY/netlify/functions/server.js

import express, { Router } from "express";
import serverless from "serverless-http";
import path from "path";

const __dirname = path.dirname('./');

const app = express();

const router = Router();

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get("/:universalURL", (req, res) => { 
    res.send("404 URL NOT FOUND"); 
});

app.use("/.netlify/functions/server", router);

export const handler = serverless(app);



//Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Node.js listening on port " + listener.address().port);
  });
  
  