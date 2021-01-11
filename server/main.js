const express = require('express');
const ws = require('ws');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/login', (req, res) => {
    const users = fs.readFile('users', 'utf8', (error, content) => {
        if (error) { throw error };
        const users = content.split("\r\n");
        if (users.indexOf(req.body.username) === -1) {
            const oldUsers = users.join('\r\n');
            fs.writeFile('users', `${oldUsers}${req.body.username}\r\n`, (error) => {
                if (error) { throw error };
                res.json({
                    "status": "success",
                    "message": { sessionId: 'jakis-numerek' }, 
                });
            });
        } else {
            res.json({
                "status": "error",
                "message": 'username-exist', 
            });
        }
    })
});


  app.listen(process.env.PORT || 8001, function () {
    console.log('Data server is running on port 8001');
  });