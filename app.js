const express = require('express')
const path = require('node:path')
const movieRoute = require('./routes/movieRoute')
const categoryRoute = require('./routes/categoryRoute')
const directorRoute = require('./routes/directorRoute')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', movieRoute)
app.use('/categories', categoryRoute)
app.use('/directors', directorRoute)


const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) {
        throw error
    }

    console.log(`Server running on port ${PORT}`)
})