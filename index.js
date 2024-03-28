// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // returns the 1st 2 elements
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // returns the last 2 elements
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// allows us to invoke either function from the array === you can call upon either function by allowing us to access them through the selectingDrvers array

function createFareMultiplier(int) {
    return function(fare) { // returns function that multiplies fare by integer
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2); // doubles the fare by multiplying it by 2

const fareTripler = createFareMultiplier(3); // triples the fare by multiplying it by 3

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers); // returns a specific subset of drivers, in this case the last two drivers. if you used just drivers, it would return all of them
}