# Worker threads example

This repository is a simple example of how to use nodejs worker threads 
in typescript without using ts-node (so no JIT transpiler is needed).

## Instructions

- `git clone`
- `npm install`
-  `npm run dev`

### Routes

`/ping`: test route that responds 'pong'

`/block`: route that will prevent other requests to be processed
until it has finished

`/worker`: route that will allow other requests to be processed