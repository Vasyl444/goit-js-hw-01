'use strict';
function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2
};
const result = getElementWidth("200px", "0px", "0px");
console.log(getElementWidth("200px", "0px", "0px"));