const express = require('express')
const app = express()
const ExpressLogger = require('leekslazylogger-express');
const log = new ExpressLogger({
    name: 'FrozenYogurt',
    logToFile: false,
    keepSilent: true,
});
const port = 3000
app.use(log.express())

app.use(function (req, res, next) {
  res.status(200).send("OK")
})

app.listen(port, () => {
  console.log(`Web Started`)
})