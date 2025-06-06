function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}


const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectionFunction) {
  return selectionFunction(drivers);
}

