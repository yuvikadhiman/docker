const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal!</h2>
          <h3>${userGoal}</h3>
        </section>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(80);

