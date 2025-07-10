require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const Person = require('./models/person')

app.use(express.json())
app.use(express.static('dist'))

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

let persons = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: "2",
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: "3",
        name: "Dan Abramov",
        number: "12-43-234345"
    }
]

app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people<p>
        <p>${Date().toString()}<p>
        `
    )
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    id = request.params.id

    if(persons.find(person => person.id === id)){
        const person = persons.find(person => person.id === id)
        response.json(person)
    }
    else(
        response.status(404).end()
    )
})

app.delete('/api/persons/:id', (request, response) => {
    
    
    response.status(204).end()
})

const generateId = () => {
    return Math.round(Math.random() * 1000000)
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(result => {
        response.json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})