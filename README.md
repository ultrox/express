## What is this?

Its boilerplate of my choosing to build big & small express app's, mostly API's.


### Sources: 
Inspired by work from [Wes](https://github.com/wesbos/Learn-Node) & [Kent](https://github.com/kentcdodds/kentcdodds.com)


## Some notes

Entry point is in `index.js` outside `src`, on which then is decided based on
`NODE_ENV` do we proceed with nodemon ( development ) and support auto refresh.

It uses babel to transpile code in runtime with `babel-register` so I'm writing
ES6 this is setup in `dev.js`.


## Features

- auto refresh on file changes
- detect if port is in use and +1 
- ES6 via babel
- loggin requests with morgan
- smart loggin instead of console.log via loglevel
- cors is handled
- node-fetch so fetching is 'almost' the same as in front
