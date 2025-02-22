const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(anyNumber){
    return function(fare){
        return anyNumber * fare
    }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
};