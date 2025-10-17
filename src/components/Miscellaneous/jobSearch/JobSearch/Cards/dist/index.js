"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
var react_simple_star_rating_1 = require("react-simple-star-rating");
var jobs_1 = require("Data/jobs");
var image_1 = require("next/image");
var Constant_1 = require("utils/Constant");
var link_1 = require("next/link");
var CardsClass = function () {
    return (React.createElement(react_1.Fragment, null, jobs_1.jobData &&
        jobs_1.jobData.map(function (item) { return (React.createElement(reactstrap_1.Col, { xl: 6, className: "xl-100", key: item.id },
            React.createElement(reactstrap_1.Card, { className: "" + (item.ribbion ? "ribbon-vertical-left-wrapper" : "") },
                item.ribbion ? (React.createElement("div", { className: "ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary " + (!item.ribbion && "d-none") },
                    React.createElement("i", { className: "icofont icofont-love" }))) : ("  "),
                React.createElement("div", { className: "job-search" },
                    React.createElement(reactstrap_1.CardBody, null,
                        React.createElement(reactstrap_1.Media, null,
                            React.createElement(image_1["default"], { width: 40, height: 40, className: "img-40 img-fluid m-r-20", src: Constant_1.ImgPath + "/" + item.logo, alt: "job" }),
                            React.createElement(reactstrap_1.Media, { body: true, className: "w-100" },
                                React.createElement("h6", null,
                                    React.createElement(link_1["default"], { href: Constant_1.Href }, item.job_name),
                                    item.type === "new" ? (React.createElement(reactstrap_1.Badge, { color: "primary", className: "pull-right" }, item.badgeValue)) : (React.createElement("span", { className: "pull-right" }, item.type))),
                                React.createElement("p", null,
                                    item.job_area,
                                    ", ",
                                    item.job_city,
                                    React.createElement("span", null,
                                        React.createElement(react_simple_star_rating_1.Rating, { className: "ms-1", fillColor: "#ff5f24", initialValue: Math.random() * 5, size: 17 }))))),
                        React.createElement("p", null, item.Job_description)))))); })));
};
exports["default"] = CardsClass;
