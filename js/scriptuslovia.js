"use strict";

// if (4) {
//     console.log("OK");
// } else {
//     console.log("Error");
// }

// // const num = 50;

// if (num < 49) {
//     console.log("ERROR");
// } else if (num > 100) {
//     console.log("Mnogo");
// } else {
//     console.log("OK");
// }

// (num === 50) ? console.log("OK") : console.log("ERROR"); 

const num = 50;

switch (num) {
    case 49:
        console.log("Ne verno");
        break;
    case 100:
        console.log("Ne verno");
        break;
    case 50:
        console.log("Verno");
        break;
    default:
        console.log("Ne v etot raz");
        break;
}