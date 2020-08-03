"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCs = void 0;
var createCs = function (prefix) { return function (suffix) {
    return suffix ? prefix + "-" + suffix : prefix;
}; };
exports.createCs = createCs;
