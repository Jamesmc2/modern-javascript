const dayjs = require("dayjs");

console.log("Hello from index.js");
console.log(
  dayjs()
    .startOf("month")
    .add(9, "day")
    .set("year", 1998)
    .set("month", 5)
    .set("hour", 11)
    .set("minute", 59)
    .format("YYYY-MM-DD HH:mm:ss")
);

var nums = [1, 2, 4, 5, 6, 7, 8, 5, 6, 5];
var fives = [];
nums.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log(fives);

var name = "Bob",
  time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
