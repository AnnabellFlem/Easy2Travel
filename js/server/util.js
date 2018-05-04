'use strict'
const fs = require('fs');

const definify = path => fs.existsSync(path) ? path : '';
const isExist = element => typeof element !== 'undefined' && element !== null;
const getUrlParameter = param => {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        parameterName;

    for (let i = 0; i < sURLVariables.length; i++) {
        parameterName = sURLVariables[i].split('=');
        if (parameterName[0] === param) {
            return parameterName[1] === undefined ? true : parameterName[1];
        }
    }
};
const getCaseInsensitive = value => new RegExp(`^${value}$`, 'i');
const validateEmail = email => /^\w+([\-]?\w+)*@\w+([\-]?\w+)*(\.\w{2,3})+$/.test(email);

module.exports = {
    definify : definify,
    isExist : isExist,
    getUrlParameter : getUrlParameter,
    getCaseInsensitive : getCaseInsensitive,
    validateEmail : validateEmail
}