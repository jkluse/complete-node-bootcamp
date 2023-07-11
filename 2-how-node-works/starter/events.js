const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}
// const myEmitter = new EventEmitter();
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
	console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
	console.log("Customer name: Jonas");
});
myEmitter.emit("newSale");

////////////

const server = http.createServer();

server.on("request", (req, res) => {
	console.log("Request Recieved!");
	res.end("Request recieved!");
});
server.on("request", (req, res) => {
	res.end("Another Request!");
});
server.on("close", () => {
	console.log("Server closed");
});

server.listen(3000, () => {
	console.log("Waiting for requests");
});
