# Advent of Code 2024 — Day 2: Red-Nosed Reports

A JavaScript solution to the Advent of Code 2024 Day 2 challenge. The problem involves parsing reactor safety reports and determining which ones meet a set of stability criteria this is part of a Samdesk application

---

## The Problem

Each line of the input represents a **report** — a sequence of numbers called **levels**. The job is to figure out how many of those reports are considered **safe**.

A report is safe when:
- The levels move in one direction only — either all going up or all going down
- Each step between adjacent levels is between 1 and 3 (no flat lines, no big jumps)

## Example

```
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

| Report      | Result | Reason                                      |
|-------------|--------|---------------------------------------------|
| 7 6 4 2 1   | Safe   | All decreasing by 1 or 2                    |
| 1 2 7 8 9   | Unsafe | 2 → 7 is a jump of 5                        |
| 9 7 6 2 1   | Unsafe | 6 → 2 is a drop of 4                        |
| 1 3 2 4 5   | Unsafe | Switches direction mid-sequence             |
| 8 6 4 4 1   | Unsafe | 4 → 4 is flat, no change                    |
| 1 3 6 7 9   | Safe   | All increasing by 1, 2, or 3                |

**Result: 2 safe reports**

---

## How It Works

The logic is straightforward. For each report:

1. Check the direction using the first two levels
2. Walk through every adjacent pair and confirm the difference is between 1 and 3 in the right direction
3. If any pair breaks the rules, the report is flagged as unsafe
4. Count up all the reports that made it through clean

---

## Running It

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Steps

1. Clone the repo:
   ```bash
   git clone https://github.com/Eliya-G/samdesk-advent-of-code-day-2-challenge.git
   cd samdesk-advent-of-code-day-2-challenge
   ```

2. Drop your puzzle input into the root directory as `input.txt`

3. Run the solution:
   ```bash
   node solution.js
   ```


## File Structure

```
aoc-2024-day2/
├── solution.js     # The solution
├── input.txt       # Your puzzle input (included)
└── README.md       # This file
```
