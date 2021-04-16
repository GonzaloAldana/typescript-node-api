import { Router } from 'express'
import { pageRouter } from './page/page.router'

export const mainRouter = Router()

mainRouter
    .get('/hello', function (req, res) {
        res.send('hello, world!')
    })
    .get('/data', function (req, res) {
        res.send('data, data!')
    })
    .use('/page', pageRouter)