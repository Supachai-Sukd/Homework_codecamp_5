const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.get('/search', (req, res) => {
    let formHTML = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2>HTML Forms</h2>

    <form action="/dosearch" method="GET">
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="firstname" value="John" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lastname" value="Doe" /><br /><br />
      <input type="submit" value="Submit" />
    </form>

    <p>
      If you click the "Submit" button, the form-data will be sent to a page
      called "/action_page.php".
    </p>
  </body>
</html>

    `
    res.send(formHTML)
})

app.get('/dosearch', (req, res) => {
    res.send(users.filter( x => x.firstName.includes(req.query.firstname)))
})


app.listen(3000, () => console.log('Server start...'))