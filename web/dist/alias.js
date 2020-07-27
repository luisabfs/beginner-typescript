"use strict";
function logProduct(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logUser(uid, user) {
    console.log("A product with " + uid + " has a title as " + user + ".");
}
function logPlatform(platform) {
    return platform;
}
logProduct(123, 'cellphone');
logProduct('123', 'cellphone');
logUser(123, 'Luísa');
logUser('123', 'Luísa');
logPlatform('Linux');
