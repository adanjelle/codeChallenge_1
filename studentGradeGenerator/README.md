# Grade Calculator

## Introduction

This is a simple JavaScript function that calculates the grade of a student based on their marks, according to the following grading system:

- A > 79
- B - 60 to 79
- C -  49 to 59
- D - 40 to 49
- E - less than 40

## Function

### `calculateGrade(marks)`

This function takes the student's marks as input and returns the corresponding grade based on the grading system mentioned above.

#### Parameters

- `marks` (number): The marks obtained by the student. Should be a number between 0 and 100.

#### Returns

- (string): The grade corresponding to the student's marks.

## Usage

1. Clone or download the `grade-calculator.js` file to your project directory.

2. Import the function into your JavaScript file using:

```javascript
import calculateGrade from './grade-calculator.js';
