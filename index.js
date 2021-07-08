const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => func(drivers);