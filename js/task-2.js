"use strict";
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);