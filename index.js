// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    const newArr = [];
    for (let i = 0; i < 2; i++) {
      newArr.push(drivers[i]);
    }
    return newArr;
  };
  const returnLastTwoDrivers = (drivers) => {
    const newArr = [];
    for (let i = drivers.length - 2; i < drivers.length; i++) {
      newArr.push(drivers[i]);
    }
    return newArr;
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
  };
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  const selectDifferentDrivers = (arrayOfDrivers, functionToInvoke) => {
    return functionToInvoke(arrayOfDrivers);
  };