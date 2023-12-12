// Code your solution in this file!
function distanceFromHqInBlocks(toLocation){
     const hqBlock = 42;
     
     if (toLocation > hqBlock){
        return toLocation - hqBlock;
     }
     else {
        return hqBlock - toLocation;
     }
     
}
console.log(distanceFromHqInBlocks(45));

function distanceFromHqInFeet(toLocation){

    const blocks = distanceFromHqInBlocks(toLocation);
    const blockInFeet = 264;
    const distanceInFeet = blocks * blockInFeet; 

    return distanceInFeet;
}
console.log(distanceFromHqInFeet(45));

function distanceTravelledInFeet(start, destination){
    const blockLengthInFeet = 264;
    const blocksTraveled = Math.abs(destination - start);
    const distanceFeet = blocksTraveled * blockLengthInFeet;

    return distanceFeet;

}
console.log(distanceTravelledInFeet(34,38));

function calculatesFarePrice(start, destination){
    const blockFeet = 264;
    const blockInBus = Math.abs(destination - start);
    const disInFeet = blockInBus * blockFeet;

    if (disInFeet < 400){
        return 0;
    }
    else if (disInFeet <= 2000){
        const payNow = disInFeet - 400;
        const fairPay = payNow * 0.02;
        return fairPay; 
    }
    else if (disInFeet <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
    
}
console.log(calculatesFarePrice(34,32))


