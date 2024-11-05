// // find total days in js
// let  fromDate = new Date("02-10-2024");
// let  toDate = new Date("10-11-2024");

// let  totalDays = (toDate - fromDate) / (3600 * 24 * 1000) + 1;

// // console.log(totalDays);
// // console.log(1 / "0");
// // console.log(new Date().getUTCDate());

// function add() {
//   return this.name;
// }
// let  dd = {
//   name: "asdsa",
// };
// let  b = add.bind(dd);
// console.log(add.call(dd));
// console.log(add.apply(dd));

// console.log(b());
// let nameObj = {
//   name: "Tony",
// };

// let PrintName = {
//   name: "steve",
//   sayHi: function () {
//     // Here "this" points to nameObj
//     console.log(this.name);
//   },
// };

// console.log(PrintName.sayHi.call(nameObj));
// console.log(2 - +"2" + 2);
// console.log(1 + "2" + 2);
// console.log("A" - "B");
// let a = 5;
// let b1 = a;
// a = 10;

// let c = { id: 1 };
// let d = c;
// d.id = 2;

// function multiply(a, b) {
//   return a * b;
// }

// function result(op, a, b) {
//   return op(a, b);
// }

// result(multiply, 2, 3);
let a1 = [4, 5, 6, 7, 4, 8, 9, 7],
  count = {};
a1.forEach((d) => {
  if (count[d]) {
    count[d] += 1;
  } else {
    count[d] = 1;
  }
});
console.log(count);
let a = {
  id: 1,
};
let b = JSON.parse(JSON.stringify(a));
b.id = 2;
console.log(a);
console.log(b);

{
  var aa = (bb = 1);
}

console.log(bb);
