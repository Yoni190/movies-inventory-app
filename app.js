const express = require('express')
const movieRoute = require('./routes/movieRoute')
const categoryRoute = require('./routes/categoryRoute')
const directorRoute = require('./routes/directorRoute')

const app = express()

app.use('/', movieRoute)
app.use('/category', categoryRoute)
app.use('/director', directorRoute)


const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) {
        throw error
    }

    console.log(`Server running on port ${PORT}`)
})