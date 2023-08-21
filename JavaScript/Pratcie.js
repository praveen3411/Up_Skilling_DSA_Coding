let one = (y) => {
  console.log("hello");
  y();
};
one(
  (y = () => {
    console.log("Bollo");
  })
);

function Bollo(a) {
  console.log(a);
}
function Ram(a, b) {
  return a + b;
}
Bollo(Ram(10, 20));

const arr = [5, 1, 3, 2, 6];

let bo = arr
  .map((item) => {
    return item * 3;
  })
  .filter((item) => item % 2 === 0)
  .reduce((acc, sum) => {
    return acc + sum;
  }, 0);
console.log(bo);

let ro = arr.filter((item) => item > 4);
console.log(ro);

let to = arr.reduce((acc, sum) => {
  return acc + sum;
}, 0);
console.log(to);

function funone(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(funone(arr));
let v = arr.reduce((acc, cur) => {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
}, 0);
console.log(v);

let persons = [
  { firstName: "Praveen", lastName: "Kumar", age: 23 },
  { firstName: "Ganesh", lastName: "Kumar", age: 24 },
  { firstName: "vani", lastName: "sree", age: 45 },
  { firstName: "Prvallika", lastName: "Yadav", age: 24 },
];

let taking = persons
  .map((item) => {
    return item.firstName;
  })
  .filter((item) => {
    return item[0] === "P";
  });
console.log(taking);

let boomone = persons.reduce((acc, curre) => {
  if (acc[curre.age]) {
    acc[curre.age] = ++acc[curre.age];
  } else {
    acc[curre.age] = 1;
  }
  return acc;
}, {});
console.log(boomone);

function ma() {
  for (var i = 1; i <= 5; i++) {
    function hel(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    }
    hel(i);
  }
}
ma();

let callone = {
  name: "praveen Kumar",
  age: 23,
  city: "Bangalore",
};
let calltwo = {
  name: "Ganesh Kumar",
  age: 24,
  city: "Channai",
};
let callthree = {
  name: "Mahesh Kumar",
  age: 24,
  city: "Ananthapur",
};

function Mainone(one, two) {
  console.log(
    `My name is ${this.name} and my age is ${this.age} and i am leaving in ${this.city} my hobies is ${one} and ${two} `
  );
}

Mainone.call(callone, "Cricket", "Kabadi");
Mainone.apply(calltwo, ["Cricket", "Tech"]);
let ramaro = Mainone.bind(callthree, "one", "two");
ramaro();

// Sperad Operator

let SperadOperator = (a, b, c, d, e) => {
  console.log(a + b + c + d + e);
};
let take = [1, 2, 3, 4, 5];
SperadOperator(10, ...take);
let hello = [1, 2, 3, 4, 5];
let bollo = [6, 7, 8, 1, 2, 3, ...hello];
console.log(bollo);
let r = [1, 2, 3, 4, 5, 6];
const [del, del2, ...del3] = r;
console.log(del, del2);
console.log(del3);

let funonee = (a, b, ...rest) => {
  let com = a + b;
  console.log(com);
  let sum = 0;
  for (const arg of rest) {
    sum = sum + arg;
  }
  return sum;
};

console.log(funonee(10, 20, 1, 1, 1, 1));

let objectdis = ["name", "age", "3"];
let [name, age, boj] = objectdis;
console.log(name, age, boj);

let duplicates = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8];
let obj = {};
let RemovingDuplicates = (on) => {
  for (let i = 0; i <= on.length; i++) {
    let char = on[i];
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] = obj[char] + 1;
    }
  }
  for (let one in obj) {
    console.log(one);
  }
};
RemovingDuplicates(duplicates)
