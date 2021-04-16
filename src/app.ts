import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { mainRouter } from './routes/main.router'
export const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny')) // Logging
app.use(cors())


// Set Views
app.set('view engine', 'ejs')

app.set("port", process.env.PORT || 3000);


app.use('/', mainRouter)