"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "It is " + isOpen;
// number (int, float, hex, binary)
var total;
total = 3.33;
// array (type[])
var items;
items = ["blouse", "skirt"];
var values;
values = [1, 2, 3];
// tuple
var movies;
movies = ["Avengers", 2019];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
;
// any (qualquer coisa) NÃO UTILIZAR!!!
var coisa;
coisa = [1, 'string', true, { soco: 'soco', bate: 'bate' }];
// void (vazio)
function logger() {
    console.log('void');
}
;
// object
var cart;
cart = {
    key: 'value',
};
// Type Inference
var message2 = "initial message";
message2 = "new message";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
