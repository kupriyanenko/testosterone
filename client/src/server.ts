import io = require('socket.io-client');

export function connect() {
    return io(window.location.hostname + ':3001');
};
