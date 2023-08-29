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
