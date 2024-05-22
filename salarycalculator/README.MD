# Salary Calculation Functions

This set of JavaScript functions is designed to calculate various components of an employee's salary, including taxes, deductions, gross salary, and net salary.

## Functions

### 1. `calculatePAYE(basicSalary)`

Calculates PAYE (Pay As You Earn) tax based on the provided basic salary.

### 2. `calculateNHIF(basicSalary)`

Calculates NHIF (National Hospital Insurance Fund) deductions based on the provided basic salary.

### 3. `calculateNSSF(basicSalary)`

Calculates NSSF (National Social Security Fund) deductions based on the provided basic salary.

### 4. `calculateGrossSalary(basicSalary, benefits)`

Calculates the gross salary by adding the basic salary and any additional benefits.

### 5. `calculateNetSalary(basicSalary, benefits)`

Calculates the net salary after deducting PAYE tax, NHIF deductions, and NSSF deductions from the gross salary.

## Parameters

- `basicSalary`: The basic salary of the employee.
- `benefits`: Additional benefits received by the employee, if any.

## Example Usage

```javascript
const basicSalary = 50000; 
const benefits = 10000; 
const paye = calculatePAYE(basicSalary);
const nhif = calculateNHIF(basicSalary);
const nssf = calculateNSSF(basicSalary);
const grossSalary = calculateGrossSalary(basicSalary, benefits);
const netSalary = calculateNetSalary(basicSalary, benefits);

console.log("PAYE (Tax): KES " + paye.toFixed(2));
console.log("NHIF Deductions: KES " + nhif.toFixed(2));
console.log("NSSF Deductions: KES " + nssf.toFixed(2));
console.log("Gross Salary: KES " + grossSalary.toFixed(2));
console.log("Net Salary: KES " + netSalary.toFixed(2));
