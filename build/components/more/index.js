"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var photoIcon = require("../../assets/photo.svg");
// import * as phraseIcon from "../../assets/phrase.svg";
var cs = utils_1.createCs("component-chat-more");
var More = function (props) {
    var moreVisible = props.moreVisible, onClickPhoto = props.onClickPhoto;
    return (React.createElement("div", { className: cs() + " " + (moreVisible ? cs("show") : cs("close")) },
        React.createElement("div", { className: cs("item"), onClick: onClickPhoto },
            React.createElement("img", { src: photoIcon.default ? photoIcon.default : photoIcon, alt: "" }))));
};
exports.default = More;
