// require your server and launch it
const server = require("./api/server")

const express = require("express")

const Port = 9000;

server.listen(Port, () => {
    console.log(`Listening on ${Port}`)
})