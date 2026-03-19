const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

function isSafe(levels) {
  const isIncreasing = levels[1] > levels[0];

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    if (isIncreasing && (diff < 1 || diff > 3)) return false;
    if (!isIncreasing && (diff > -1 || diff < -3)) return false;
  }

  return true;
}

const reports = input.split("\n").map((line) =>
  line.split(" ").map(Number)
);

const safeCount = reports.filter(isSafe).length;

console.log("Safe reports:", safeCount);
