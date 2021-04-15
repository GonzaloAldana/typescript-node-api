import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
export const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny')) // Logging
app.use(cors())

app.set("port", process.env.PORT || 3000);


app.get('/', function (req, res) {
    res.send('hello, world!')
})