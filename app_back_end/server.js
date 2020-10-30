const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 8080
const MONGO_DB_URI = `mongodb://localhost:27017/hospital_management?readPreference=primary&appname=MongoDB%20Compass&ssl=false`

mongoose.connect(MONGO_DB_URI,
        {useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true}
    )
    .then(() => {
        console.log(`Database Connected`)
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })





      