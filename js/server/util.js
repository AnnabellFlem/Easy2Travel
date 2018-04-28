'use strict'
const fs = require('fs');

function definify(path) {
    return fs.existsSync(path) ? path : '';
}

module.exports = {
    definify: definify
};
