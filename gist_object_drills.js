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

