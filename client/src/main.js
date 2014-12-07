require.config({
    'baseUrl': '../client/out/',
    'paths': {
        'jbone': '../bower_components/jbone/dist/jbone',
        'socket.io-client': '../bower_components/socket.io-client/socket.io',
        'underscore': '../bower_components/underscore/underscore'
    }
});

require([
    'index'
]);
