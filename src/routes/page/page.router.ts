
import express, { Router } from 'express'
export const pageRouter = Router()

pageRouter.get('/index/:text?', (req, res) => {
    const { text = 'This is EJS' } = req.params;
    res.render('index', { text: text })
})

    .get('/about/:text', (req, res) => {
        const { text = 'This is EJS' } = req.params;
        res.render('about', { text: text })
    })


    // Static Files
    .use(express.static('public'))
    .use('/css', express.static(__dirname + 'public/css'))
    .use('/js', express.static(__dirname + 'public/js'))
    .use('/img', express.static(__dirname + 'public/img'))