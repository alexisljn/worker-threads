const express = require('express')
const app = express()
const port = 3000
import {Request, Response} from "express";

app.get('/block', (req: Request, res: Response) => {
    for (let i = 0; i < 400000; i++) {
        console.log("i :",i);
    }

    res.send('Hello World after a lot of iterations !')
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
