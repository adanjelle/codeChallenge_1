// Function to calculate PAYE tax based on the basic salary
function calculatePAYE(basicSalary) {
    let tax = 0;
    if (basicSalary <= 24000) {
        tax = basicSalary * 0.1; // 10% tax rate
    } else if (basicSalary <= 32333) {
        tax = 2400 + (basicSalary - 24000) * 0.15; // 15% tax rate 
    } else if (basicSalary <= 40466) {
        tax = 4266.95 + (basicSalary - 32333) * 0.2; // 20% tax rate 
    } else if (basicSalary <= 48600) {
        tax = 6266.95 + (basicSalary - 40466) * 0.25; // 25% tax rate 
    } else {
        tax = 9416.95 + (basicSalary - 48600) * 0.3; // 30% tax rate 
    }
    return tax;
}

// Function to calculate NHIF deductions 
function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 9999) {
        nhif = 300;
    } else if (basicSalary <= 14999) {
        nhif = 400;
    } else {
        nhif = 500;
    }
    return nhif;
}

// Function to calculate NSSF deductions based on the basic salary

function calculateNSSF(basicSalary) {
    return basicSalary * 0.06; // 6% of the basic salary
}

// Function to calculate gross salary

function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

// Function to calculate net salary

function calculateNetSalary(basicSalary, benefits) {
    const paye = calculatePAYE(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    return grossSalary - paye - nhif - nssf;
}

// Example usage:

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
