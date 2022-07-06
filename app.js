const express = require('express');
const app = express();
const PORT = 5050;

app.use(express.static("views"))

app.use((req, _, next) => {
    console.log("new request", req.method, req.url)
    next()
})

app.use((_, res) => {
    res.status(404).send("Es ist leider ein Fehler aufgetreten")
})

app.listen(PORT, () => {
    console.log("server listening on port", PORT)
})