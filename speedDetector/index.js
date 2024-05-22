// Define a function that calculates demerit points based on the speed of the car
function calculateDemeritPoints(speed) {
    // Define constants for speed limit, km per demerit point, and points required for license suspension
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsToSuspend = 12;

    // Check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        // If the speed is within the limit, print "Ok"
        console.log("Ok");
    } else {
        // If the speed exceeds the limit, calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        // Check if the demerit points exceed the suspension threshold
        if (demeritPoints >= pointsToSuspend) {
            // If demerit points exceed suspension threshold, print "License suspended"
            console.log("License suspended");
        } else {
            // If demerit points are within limit, print the number of demerit points
            console.log("Points: " + demeritPoints);
        }
    }
}

// Example usage:
calculateDemeritPoints(80); 
calculateDemeritPoints(64); 
calculateDemeritPoints(140); 
