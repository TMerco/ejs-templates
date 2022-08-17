const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json')

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page'
  var heading = 'My Website'
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/about', (req, res) => {
  var title = 'My About Page'
  var heading = 'My Website'
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})

app.get('/info', (req, res) => {
  var title = 'My Info Page'
  var heading = 'My Website'
  res.render('pages/info',{
    'title':title,
    'heading':heading
  })
})

app.get('/project', (req, res) => {
  var title = 'My Projects Page'
  var heading = 'My Website'
  res.render('pages/project',{
    'title':title,
    'heading':heading
  })
})

app.get('/users', (req, res) => {
  var title = 'My Users Page'
  var heading = 'My Website'
  res.render('users/index',{
    'title':title,
    'heading':heading,
    users:data
  })
})

app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var heading = 'My Website'
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     'heading':heading,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);

})