"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var image_1 = require("next/image");
var react_1 = require("react");
var link_1 = require("next/link");
var Constant_1 = require("utils/Constant");
var Slider = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('react-slick'); }); }, { ssr: false });
var NotificationSlider = function () {
    // given slider options which i need ,you can add options which you want to use in slider
    var notificationSliderOption = { slidesToShow: 1, slidesToScroll: 1, dots: false, vertical: true, variableWidth: false, autoplay: true, autoplaySpeed: 2500, arrows: false };
    return (react_1["default"].createElement(Slider, __assign({ className: 'notification-slider overflow-hidden m-0' }, notificationSliderOption),
        react_1["default"].createElement("div", { className: 'd-flex h-100' },
            react_1["default"].createElement(image_1["default"], { src: '/assets/images/giftools.gif', alt: 'git', width: 26, height: 26 }),
            react_1["default"].createElement("h6", { className: 'mb-0 f-w-400' },
                react_1["default"].createElement("span", { className: 'font-primary' }, Constant_1.DontMissOut),
                react_1["default"].createElement("span", { className: 'f-light' }, Constant_1.Notificationtext)),
            react_1["default"].createElement("i", { className: 'icon-arrow-top-right f-light' })),
        react_1["default"].createElement("div", { className: 'd-flex h-100' },
            react_1["default"].createElement(image_1["default"], { src: '/assets/images/giftools.gif', alt: 'git', width: 26, height: 26 }),
            react_1["default"].createElement("h6", { className: 'mb-0 f-w-400' },
                react_1["default"].createElement("span", { className: 'f-light' }, Constant_1.Somethingyoulove)),
            react_1["default"].createElement(link_1["default"], { className: 'ms-1', href: 'https://themeforest.net/user/pixelstrap/portfolio', target: '_blank' }, Constant_1.Buynow))));
};
exports["default"] = NotificationSlider;
