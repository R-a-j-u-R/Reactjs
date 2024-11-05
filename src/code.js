// // // // call by value and call by reference in js
// // // //call by value = Actual and copied variables will be created in different memory locations.
// // // //call by reference = Actual and copied variables will be created in same memory locations.

// // // // call by value

// // // let a = 5;
// // // let b = a;
// // // a = 10;
// // // console.log(a);
// // // console.log(b);

// // // // call by refrence

// // // let c = { id: 1 };
// // // let d = c;
// // // d.id = 2;
// // // console.log(c);
// // // console.log(d);

// // let array = [1, 2, 3, 7, 5];
// // let targetSum = 10;

// // let start = 0;
// // let currentSum = 0;

// // for (let i = 0; i < array.length; i++) {
// //   currentSum += array[i];

// //   // Shrink the window from the left if the currentSum exceeds targetSum
// //   while (currentSum > targetSum && start <= i) {
// //     currentSum = currentSum - array[start];
// //     start++;
// //   }

// //   // Check if we have a subarray with the desired sum
// //   if (currentSum === targetSum) {
// //     console.log(array.slice(start, i + 1).join(","), `sum=${currentSum}`);
// //     break;
// //   }
// // }

// // let max = 0,
// //   smax = 0;
// // array.forEach((d) => {
// //   if (d > max) {
// //     smax = max;
// //     max = d;
// //   } else if (max > d && smax < d) {
// //     smax = d;
// //   }
// // });
// // console.log(smax);
// // console.log(max);
// // dd = () => {
// //   console.log("df");
// // };
// // dd();

// // let ss = 0;
// // for (let i = 1; i <= 10; i++) {
// //   ss += i;
// // }
// // console.log(ss);
// // // // Reverse the array

// // // const reverse = [1, 2, 34, 5, 6],
// // //   reversedArray = [];

// // // for (let i = reverse.length - 1; i >= 0; i--) {
// // //   if (i == 2) {
// // //     continue;
// // //   }
// // //   reversedArray.push({ i: reverse[i] });
// // // }
// // // console.log("reverse", reversedArray);
// // // //unique elemnets in array

// // // const unique = [1, 2, 2, 3, 4, 5, 6, 68];
// // // console.log("unique", [...new Set(unique)]);

// // // //descending order of array

// // // console.log(
// // //   "order",
// // //   unique.sort((a, b) => b - a)
// // // );

// // // const dd = {
// // //   id: 1,
// // //   name: "Dasdasd",
// // // };
// // // let ee = [1, 2, 3, 4],
// // //   max = 0,
// // //   smax = 0;
// // // console.log(delete dd);
// // // console.log(delete ee);
// // // const [, , , , raju] = ee;
// // // console.log(raju);
// // // (() => {
// // //   console.log("one");
// // //   setTimeout(() => {
// // //     console.log("two");
// // //   }, null);
// // //   console.log("three");
// // // })();

// // // const promise = new Promise((reslove, reject) => {
// // //   let s = 12;
// // //   if (s == 1212) {
// // //     reslove("promise resloved");
// // //   } else {
// // //     reject("promise rejected");
// // //   }
// // // });
// // // promise.then((res) => console.log(res)).catch((err) => console.log(err));
// // // ee.forEach((d) => {
// // //   if (d > 0) {
// // //     smax = max;
// // //     max = d;
// // //   } else if (smax > d && d < max) {
// // //     smax = d;
// // //   }
// // // });
// // // console.log(max);
// // // console.log(smax);
// // // let a111 = [1, 2, 3, 1, 2, 3, 4, 5, 6];
// // // let empty = [];
// // // let dict = {},
// // //   dd1 = {};

// // // // a111.forEach((d) => {
// // // //   if (!dict[d]) {
// // // //     dict[d] = 0;
// // // //     console.log(d, "ddsd");
// // // //   }
// // // //   dict[d]++;
// // // // });
// // // // console.log(dict);

// // // a111.forEach((d) => {
// // //   if (!dd1[d]) {
// // //     dd1[d] = 0;
// // //   }
// // //   dd1[d]++;
// // // });
// // // const demo = {
// // //   id: 1,
// // // };
// // // console.log(Object.prototype.valueOf(demo));
// // // console.log(dd1);
// // //@ts-nocheck
// // console.log("klops[");
// // const a = [1, 2, 2, 2, 1, 1, 3, 45, 6, 7, 7];
// // let count = {},
// //   empty = [];
// // a.forEach((d) => {
// //   if (!count[d]) {
// //     count[d] = 0;
// //   }
// //   count[d]++;
// // });
// // console.log(count);

// // a.forEach((d) => {
// //   const exist = empty.find((d1) => d1 === d);
// //   if (!exist) {
// //     empty.push(d);
// //   } else {
// //     console.log(d);
// //   }
// // });
// // console.log(empty);
// // // const a = [
// // //   {
// // //     id: 1,
// // //     nmae: "raju",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "dell",
// // //   },
// // // ];
// // // console.log(a[1].name);
// // // const a1 = [1, 2, 3, 4];
// // // for (let i = 0; i < 4; i++) {
// // //   setTimeout(() => console.log(i), 1000);
// // // }

// // // for (var i = 0; i < 4; i++) {
// // //   setTimeout(() => console.log(i), 1000);
// // // }
// // // let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
// // // console.log(Object.entries(obj));
// // let count = 0;
// // var x = 2;
// // let y = 12;
// // function func1() {
// //   setTimeout(() => {
// //     console.log(x);
// //     console.log(y);
// //   }, 3000);
// // }
// // func1();
// // (function () {
// // //   setTimeout(() => console.log(1), 2000);
// // //   console.log(2);
// // //   setTimeout(() => console.log(3), 0);
// // //   console.log(4);
// // // })();
// // let x = {},
// //   y = { name: "Ronny" },
// //   z = { name: "John" };
// // x[y] = 1;

// // // console.log(x[y]);
// // function runFunc() {
// //   console.log("1" + 1); //11
// //   console.log("A" - 1); //64
// //   console.log(2 + "-2" + "2"); //2
// //   console.log("Hello" - "World"); //?
// //   console.log("Hello" + "78"); //hello78
// // }
// // runFunc();
// // let a = 0;
// // let b = false;
// // console.log(a == b);
// // console.log(a === b);
// // var x = 23;

// (function () {
//     var x = 43;
//     (function random() {
//       x++;
//       console.log(x);
//       var x = 21;
//     })();
//   })();
