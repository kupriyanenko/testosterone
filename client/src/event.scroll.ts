import $ = require('jbone');
import _ = require('underscore');
import server = require('server');
import Action = require('action');

function handleAction(msg: Action): void {
    var el: HTMLElement;

    if (msg.selector === '_window') {
        window.scrollTo(msg.data.scrollX, msg.data.scrollY)
    } else {
        el = $(msg.selector)[0];
        el.scrollTop = msg.data.scrollY;
        el.scrollLeft = msg.data.scrollX;
    }
}

export function bind() {
    var handled: boolean = true;
    var doc: HTMLElement = document.documentElement;

    server.on('action', function(msg: Action) {
        handleAction(msg);
        handled = false;
    });

    server.on('action', _.debounce(function() {
        handled = true;
    }, 2000));

    $(window).on('scroll', function() {
        if (handled === false) {
            return;
        }

        server.emit('action', <Action>{
            selector: '_window',
            type: 'scroll',
            data: {
                scrollX: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                scrollY: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
            }
        });
    });
}
