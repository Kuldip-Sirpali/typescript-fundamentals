"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
var myvalue = addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("ram");
function signUpUser(name, email, isPaid) { }
signUpUser("ram", "ram@god.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("sita", "sita@god.com");
// function getVal(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "ironman", "spiderman"];
// const heros = [1,2,3];
// detect automatically
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.error(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
