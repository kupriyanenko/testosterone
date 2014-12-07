///<reference path="../typings/tsd.d.ts"/>

import $ = require('jbone');
import _ = require('underscore');
import server = require('server');
import watcher = require('watcher');

var socket = server.connect();
var handled: boolean = true;

$(window).on('scroll', function(e) {
    if (handled === false) {
        return;
    }

    var doc = document.documentElement;

    socket.emit('event', {
        selector: '_window',
        type: e.type,
        scrollX: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
        scrollY: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
    });
});

socket.on('event', function(msg) {
    watcher.handleEvent(msg);
    handled = false;
});

socket.on('event', _.debounce(function(msg) {
    handled = true;
}, 2000));
