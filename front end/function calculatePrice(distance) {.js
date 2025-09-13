function calculatePrice(distance) {
    let price = 0;

    if (distance <= 4) {
        price = 30; // flat rate for first 4 km
    } else if (distance <= 9) {
        price = 30 + (distance - 4) * 15;
    } else {
        price = 30 + (5 * 15) + (distance - 9) * 20;
    }

    return price;
}

let travelled = 19.5;
console.log("Total price: ₹" + calculatePrice(travelled))