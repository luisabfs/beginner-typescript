"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tlou = {
    id: 1,
    title: 'The Last of Us',
    description: "The best game ever",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro.");
    },
};
console.log(tlou.genre);
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
;
var leftbehind = {
    id: 2,
    title: 'The Last of Us - Left Behind',
    description: "You play as Ellie before the original game.",
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ["3 hour story", "new characters"],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(i, t, d, g) {
        this.id = i;
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
