// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `It is ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 3.33;

// array (type[])
let items: string[];
items = ["blouse", "skirt"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let movies: [string, number];
movies = ["Avengers", 2019];

// enum
enum Colors {
  white = "#fff",
  black = "#000"
};

// any (qualquer coisa) NÃO UTILIZAR!!!
let coisa: any;
coisa = [1, 'string', true, { soco: 'soco', bate: 'bate' }];

// void (vazio)
function logger(): void {
  console.log('void');
};

// null | undefined
type Bla = string | undefined;

// object
let cart: object;

cart = {
  key: 'value',
};

// Type Inference
let message2 = "initial message";
message2 = "new message";

window.addEventListener("click", e => {
  console.log(e.target);
});
