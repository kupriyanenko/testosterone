import $ = require('jbone');

interface WatchEvent {
    type: string;
    selector: string;

    scrollX: number;
    scrollY: number;
}

function getElement(selector: string): jBone {
    if (selector === '_window') {
        return $(window);
    } else {
        return $(selector);
    }
}

function handleScroll(event: WatchEvent): void {
    var el: HTMLElement;

    if (event.selector === '_window') {
        window.scrollTo(event.scrollX, event.scrollY)
    } else {
        el = getElement(event.selector)[0];
        el.scrollTop = event.scrollY;
        el.scrollLeft = event.scrollX;
    }
}

export function getAllEvents(element: any): string {
    var result = [];

    for (var key in element) {
        if (key.indexOf('on') === 0) {
            result.push(key.substring(2));
        }
    }

    return result.join(' ');
}

export function handleEvent(event): void {
    if (event.type === 'scroll') {
        handleScroll(event);
    }
}
