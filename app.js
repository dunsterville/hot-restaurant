const express = require('express')
const path = require('path')

const app = express()

let tables = []

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/tables', (req, res) => {
    if (tables.length > 0) {
      res.json(tables)
    } else {
      res.status(500).send({ error: 'No reservations found'})
    }
})

app.post('/tables', (req, res) => {
  console.log(req.body)
  if (req.body.name && req.body.phone && req.body.email && req.body.id) {
    let sameID = false
    tables.forEach(e => {
      if (req.body.id === e.id) {
        res.status(400).send({ error: 'Duplicate ID found' })
        sameID = true
        return
      }
    })
    if (!sameID) {
      tables.push({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        id: req.body.id
      })
    }
    res.status(200).send({success: 'Table reserved'})
  } else {
    res.status(400).send({ error: 'Request missing a required field' })
  }
})


app.listen(3000)