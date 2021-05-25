"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// const http = require("http");
// const hostname = '127.0.0.1';
// const { Server } = require("socket.io")
// const PORT = 4000;
// const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
// // I'm maintaining all active connections in this object
// const clients = {};
// const server = http.createServer(requestHandler);
// // This code generates unique userid for everyuser.
// const getUniqueID = () => {
// 	const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// 	return s4() + s4() + '-' + s4();
// };
// function requestHandler(request: any, response: any) {
// 	console.log({ request }, { response })
// 	var userID = getUniqueID();
// 	console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
// 	// You can rewrite this part of the code to accept only the requests from allowed origin
// 	const connection = request.accept(null, request.origin);
// 	(clients as any)["userID"] = connection;
// 	console.log("clients: ", Object.keys(clients), Object.keys(clients).length)
// 	console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
// }
// // METHOD 1 - socket.io
// // const ioSocket = new Server(server, {
// //     cors: {
// //         // origin: "*",
// //         origin: "ws://localhost:3000",
// //         methods: ["GET", "POST", "OPTIONS"],
// //         allowedHeaders: ["my-custom-header"],
// //         credentials: true
// //     },
// // });
// // ioSocket.on("connection", async function (socket) {
// //     // Join a conversation
// //     const { roomId } = socket.handshake.query;
// //     console.log(socket.id)
// //     console.log({ roomId })
// //     try {
// //         if (!!roomId) {
// //             socket.join(roomId);
// //             console.log("joined room: ", roomId)
// //         }
// //     }
// //     catch (e) {
// //         console.error({ e })
// //     }
// //     // Listen for new messages
// //     socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
// //         const payload = JSON.parse(data);
// //         const { roomId, message } = payload;
// //         console.log(NEW_CHAT_MESSAGE_EVENT, { roomId }, { message })
// //         ioSocket.in(NEW_CHAT_MESSAGE_EVENT).emit(NEW_CHAT_MESSAGE_EVENT, data);
// //     });
// //     // Listen for new messages
// //     socket.on("JOIN", (data) => {
// //         const payload = JSON.parse(data);
// //         const { roomId, message } = payload;
// //         console.log(NEW_CHAT_MESSAGE_EVENT, { roomId }, { message })
// //         ioSocket.in(NEW_CHAT_MESSAGE_EVENT).emit(NEW_CHAT_MESSAGE_EVENT, data);
// //     });
// //     // Leave the room if the user closes the socket
// //     socket.on("disconnect", () => {
// //         console.log("disconnecting from ", { roomId })
// //         socket.leave(roomId);
// //     });
// // });
// // server.listen(PORT, () => {
// //     console.log(`Listening on port ${PORT}`);
// // });
// // END METHOD 1
// // METHOD 2
// // const webSocketsServerPort = 8000;
// // const webSocketServer = require('websocket').server;
// // // Spinning the http server and the websocket server.
// // server.listen(webSocketsServerPort);
// // const wsServer = new webSocketServer({
// //     httpServer: server,
// //     cors: {
// //         origin: "ws://localhost:3000/",
// //         methods: ["GET", "POST"]
// //     }
// // });
// // wsServer.on('request', requestHandler)
// // END METHOD 2
// // METHOD 3
// const WS = require('ws');
// const models = require('./models/UserMessage');
// let WebSocketServer = WS.Server;
// let serverSocket = new WebSocketServer({ port: PORT });
// server.on('connection', ws => {
// 	ws.on('message', message => {
// 		try {
// 			let userMessage = new models.UserMessage(message);
// 			broadcast(JSON.stringify(userMessage));
// 		} catch (e) {
// 			console.error(e.message);
// 		}
// 	});
// });
// function broadcast(data) {
// 	server.clients.forEach(client => {
// 		client.send(data);
// 	});
// };
// console.log('Server is running on port', PORT);
// // END METHOD 3
// // OTHERS
// // server.listen(port, hostname, () => {
// //     console.log(`Server running at http://${hostname}:${port}/`);
// // });
// // //Create HTTP server and listen on port 3000 for requests
// // const server = http.createServer((req, res) => {
// //     //Set the response HTTP header with HTTP status and Content type
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World\n');
// //   });
// //listen for request on port 3000, and as a callback function have the port listened on logged
//# sourceMappingURL=app-old.js.map