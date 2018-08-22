'use strict';

//1. Object initializers and methods
const load = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};

console.log(load.hydration());

/////////////////////////////////////////////////

//2. Iterating over an object's properties
const dummy = {
  foo: 'this',
  bar: 'that',
  fum: 'fum test',
  quux: 'quux test',
  spam: 'spam test'
};

for (let key in dummy) {
  console.log(dummy[key]);
}

/////////////////////////////////////////////////
// 3. Arrays in objects

const restaurant = {
  meals: ['breakfast', 'second breakfast', 'lunch', 'elevenses', 'afternoon tea', 'supper']
};

console.log(restaurant.meals[3]);

/////////////////////////////////////////////////
// 4. Arrays of objects

function fourthExample() {
  const owner = {name:'Mr Boss', jobTitle:'Owner'};
  const personA = {name:'Cameron', jobTitle:'THINKFUL STUDENT', boss:owner['name']};
  const personB = {name:'Matt', jobTitle:'Thinkful Student Also', boss:owner['name']};
  const personC = {name:'Bob', jobTitle:'Doctor', boss:owner['name']};
  const people = [owner, personA, personB, personC];

  for (let person of people) {
    if (person['jobTitle'] !== 'Owner') {
      console.log(`${person['jobTitle']} ${person['name']} reports to ${person['boss']}`);
    } else {
      console.log(`${person['jobTitle']} ${person['name']} doesn't report to anybody.`);
    }
  }
}

fourthExample();

/////////////////////////////////////////////////
// 5. Properties that aren't there : see number 4

/////////////////////////////////////////////////
// 6. Cracking the Code
const decode = function(word){
  let cipher = {'a': 2,
    'b': 3,
    'c': 4,
    'd': 5};
  if(cipher[word[0]]){
    return word[cipher[word[0]]-1];
  } else {
    return ' ';
  }

};

const decodeWords = function(str){
  const strArr = str.split(' ');
  // let result = '';
  return strArr.reduce((acc, value) => {return acc + decode(value);}, '');
  // for (let word of strArr){
  //   result += decode(word);
  // }
  // return result;
};
console.log(decodeWords('craft block argon meter bells brown croon droop'));

/////////////////////////////////////////////////
// 7. Factory Function with LOTR

const createCharacter = function (name, nickname, race, origin, attack, defense){
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      let damageToOpp;
      let damageToYou;
      if (character.defense > this.attack){
        damageToOpp = 0;
      } else {
        damageToOpp = this.attack - character.defense;
      }
      if (this.defense > character.attack){
        damageToYou = 0;
      } else {
        damageToYou = character.attack - this.defense;
      }
      return (`Your opponent takes ${damageToOpp} damage and you receive ${damageToYou} damage`);
    }
  };
};
const characters = [createCharacter('Gandalf the White', 'gandalf', 'wizard', 'middle earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'hobbit', 'the shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'hobbit', 'the shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8,5)];
characters[0].evaluateFight(characters[1]);
characters.push(createCharacter('Arwen Undomeil', 'arwen', 'half-elf', 'Rivendell', 5, 6));
characters.find(char => char.nickname === 'aragorn').describe();
const hobbits = characters.filter(char => char.race === 'hobbit');
hobbits.forEach(elem => console.log(elem));
const attAbove5 = characters.filter(char => char.attack > 5);
attAbove5.forEach(elem => console.log(elem));