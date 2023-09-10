// const user = {
//     firstName: "Patrick",
//     lastName: "Scott",
//     hobbies: ["programming", "piano"],
//     listHobbies: function()
//     {this.hobbies.forEach(function(hobby) {
//         console.log(this.lastName)
//         console.log(hobby)
//     }, this);
    
//     }
    
// }
// user.listHobbies();

//this in arrow functions will look for the closest
// function to use for this



// Implement sample codes that showcase basic 
// OOP principles discussed in the the video lesson.
// Commit: "Introduced basic OOP concepts".

// const createPlayer = (name, hp, mp, items) => {
//     return {
//         name,
//         hp,
//         mp,
//         items,
//     };
// };

// const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
// hanSolo.hp = 150;
// console.log(hanSolo);


// const darthVader =  createPlayer("Darth Vader", 200, 50, ["Saber"]);
// console.log(darthVader);

class Player {
    age = 20;
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items; 
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
}
const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
hanSolo.speak("Never tell me the odds!")
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        
        }


AnotherPlayer.prototype.speak = function (phrase){
    console.log(`${this.name} says: ${phrase}`);}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["saber"]);
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
darthVader.speak("I find your lack of faith disturbing")
