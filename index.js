// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const firstTwoDrivers = drivers.slice(0, 2);
  return firstTwoDrivers;
};
const returnLastTwoDrivers = function (drivers) {
  const lastTwoDrivers = drivers.slice(2);
  return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier ){
    return function fare (value){
        return value *multiplier
    }
   
}

const fareDoubler=createFareMultiplier(2)

const fareTripler=createFareMultiplier(3)

const selectDifferentDrivers=(arrayOfDrivers , fn)=> fn(arrayOfDrivers);

 console.log(createFareMultiplier(3)(4));

