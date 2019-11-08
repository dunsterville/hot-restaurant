const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/tables', (req, res) => {

})

app.post('/tables', (req, res) => {
  
})


app.listen(3000)