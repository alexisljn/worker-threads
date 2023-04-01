const express = require('express')
const app = express()
const port = 3000
import {Request, Response} from "express";

app.get('/block', (req: Request, res: Response) => {
    let count: number = 0;

    for (let i = 0; i < 400000; i++) {
        console.log("i :",i);
        count = i;
    }

    res.json({count});
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
