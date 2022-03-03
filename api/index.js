const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/getPassword/:userName', function (req, res) {
    const userName = req.params.userName
    //search in database the password of the user name and send it
    /* format of the response --> {
        userName: blablabla,
        password: blablabla
    } */
    console.log(userName)
    res.send({
      name: userName,
      password: "password"
    })
})

app.listen(port)