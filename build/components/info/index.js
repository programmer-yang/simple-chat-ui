"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var cs = utils_1.createCs("component-chat-info");
var Info = function (props) {
    var text = props.text;
    return React.createElement("div", { className: cs() }, text);
};
exports.default = Info;
//# sourceMappingURL=index.js.map