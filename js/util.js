'use strict';

export function isExist(element) {
    return typeof element !== 'undefined' && element !== null;
}

export function getUrlParameter(param) {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        parameterName;

    for (let i = 0; i < sURLVariables.length; i++) {
        parameterName = sURLVariables[i].split('=');
        if (parameterName[0] === param) {
            return parameterName[1] === undefined ? true : parameterName[1];
        }
    }
}
