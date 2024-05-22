# Demerit Points Calculator

## Overview

This JavaScript function calculates demerit points based on the speed of a car compared to the speed limit. It can be used to determine whether a driver has accumulated enough demerit points to warrant license suspension.

## Function

The function `calculateDemeritPoints(speed)` takes the speed of the car (in km/h) as input and calculates demerit points accordingly.

### Parameters

- `speed`: The speed of the car in kilometers per hour (km/h).

### Behavior

The function checks if the speed is within the legal limit. If the speed is within the limit, it prints "Ok". If the speed exceeds the limit, it calculates demerit points based on the speed difference and a predefined constant. If the demerit points exceed a certain threshold, it prints "License suspended". Otherwise, it prints the number of demerit points.

## Constants

- `speedLimit`: The legal speed limit in km/h.
- `kmPerDemeritPoint`: The number of kilometers over the speed limit that corresponds to one demerit point.
- `pointsToSuspend`: The threshold number of demerit points at which a license is suspended.

## Example Usage

```javascript
calculateDemeritPoints(80); // Output: Points: 2
calculateDemeritPoints(64); // Output: Ok
calculateDemeritPoints(140); // Output: License suspended
