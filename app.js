const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// If Else statement
const user = {
    firstName: 'Tim',
    lastName: 'Cook',
    admin: false
}

app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
})
// Loop Concept

const posts = [
    {title: 'Deepak', body: 'I am a good boy' },
    {title: 'ROhan ', body: 'Cool Boy' },
    {title: 'Nitin', body: 'Simple boy' },
    {title: 'Rohit', body: 'Smart Boyt' },
]

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"
    })
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})