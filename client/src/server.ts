import io = require('socket.io-client');

var socket: SocketIOClient.Socket;

export function connect(): SocketIOClient.Socket {
    return socket = io(window.location.hostname + ':3001');
};

export function emit(event: string, ...args: any[]): SocketIOClient.Socket {
    if (!socket) {
        throw new Error('Server is not connected');
    }

    return socket.emit.apply(socket, arguments);
}

export function on(event: string, fn: Function): SocketIOClient.Socket {
    if (!socket) {
        throw new Error('Server is not connected');
    }

    return socket.on.apply(socket, arguments);
}
