import {Worker} from "worker_threads";

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

app.get('/worker', (req: Request, res: Response) => {
    // This resolves file path of the worker in working and dist directories
    const workerPath = require.resolve('./workers/loop');

    const worker = new Worker(workerPath);

    worker.on('message', ({count}) => {
        res.json({count});
    })
})


app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
