
export const PORT = 5555
export const io = require("socket.io")(PORT)
console.log("server created")
const DEFAULT_ROOM = 333;

const aliveConnections = [];
const messageQueue = []
let intervalId = undefined;

// io.of('/chat').on("connect", connectCallback)
io.on("connection", (socket: any) => {
    // const emitFn = socket.emit
    // socket.broadcast = (...args) => setTimeout(() => {
    //     emitFn.apply(socket, args)
    // }, 100)

    const sendMessages = () => {
        console.log("sending message from queue with length: ", messageQueue.length)
        if (messageQueue.length > 0) {
            const currentMessage = { ...messageQueue[0] }
            messageQueue.splice(0, 1)
            socket.broadcast.emit(currentMessage.type, currentMessage.payload)
            console.log(`BROADCAST ${Date.now()} *cursorPositionChanged* event with cursorPosition: ${currentMessage.payload}`)

        }

        if (messageQueue.length === 0) {
            clearInterval(intervalId)
            intervalId = undefined;
        }
        // if (message && message.type && message.type === "cursorPositionChanged" && message.payload) {
        // }

        console.log("current messageQueue length: ", messageQueue.length)
    }

    const clientId = socket.client.id
    console.log("connected: ", socket.id)
    // console.log(socket.conn.request)
    socket.join(DEFAULT_ROOM)
    // console.log("SOCKET ROOMS: \r\n", socket.rooms);
    // console.log("IO SOCKETS: \r\n", io.sockets.sockets);

    io.to(DEFAULT_ROOM).emit("message", `client with id: ${clientId} joined`)
    // socket.broadcast.emit("event")
    socket.on("message", (data: any) => {
        // console.log({ data })
    })

    socket.on("cursorPositionChanged", (cursorPosition: any) => {
        console.log(`RECEIVED ${Date.now()} *cursorPositionChanged* event with cursorPosition: ${cursorPosition}`)
        // socket.broadcast.emit("cursorPositionChanged", cursorPosition)
        io.to(DEFAULT_ROOM).emit("cursorPositionChanged", cursorPosition)
        // messageQueue.push({ type: "cursorPositionChanged", payload: cursorPosition })
        // if (messageQueue.length > 0 && intervalId === undefined) {
        // intervalId = setInterval(sendMessages, 4);
        // }
    })

    socket.on("markerAdded", (marker: string) => {
        console.log(`RECEIVED ${Date.now()} *markerAdded* event with marker: ${marker}`)
        io.to(DEFAULT_ROOM).emit("markerAdded", marker)
        console.log(`SENT ${Date.now()} *markerAdded* event with marker: ${marker} to room: ${DEFAULT_ROOM}`)
    })

    socket.on("clearedMarkers", () => {
        console.log(`RECEIVED ${Date.now()} *clearedMarkers* event`)
        io.to(DEFAULT_ROOM).emit("clearedMarkers")
        console.log(`SENT ${Date.now()} *clearedMarkers* event`)
    })

    socket.on("selectedToolChanged", (data: any) => {
        console.log(`RECEIVED ${Date.now()} *selectedToolChanged* event with params: ${data}`)
        io.to(DEFAULT_ROOM).emit("selectedToolChanged", data)
        console.log(`SENT ${Date.now()} *selectedToolChanged* event with params: ${data}`)
    })

    socket.on("mapChanged", (mapName: string) => {
        console.log(`RECEIVED ${Date.now()} *mapChanged* event with mapName: ${mapName}`)
        io.to(DEFAULT_ROOM).emit("mapChanged", mapName)
        console.log(`SENT ${Date.now()} *mapChanged* event with mapName: ${mapName} to room: ${DEFAULT_ROOM}`)
    })

    socket.on("disconnect", (reason: any) => {
        console.log("disconnected: ", { reason })
        // console.log(io.sockets.sockets);
    })
})