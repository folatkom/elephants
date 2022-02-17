let n = 6;
const mass = "2400 2000 1200 2400 1600 4000";
const orderIn = "1 4 5 3 6 2";
const orderOut = "5 3 2 4 6 1";
let inArray = [];
let outArray = [];
let cyclesArray = [];
let simpleArray =[];
let pickedNum;
let isFinished = false;
//parameters
let massArray = [];
let minCycleWeight;
let minGlobalWeight;
let cyclesMasses = [];
let simpleMassArray = [];
let cycleMassSum;
let method1;
let method2;
let result = 0;

//convert to arrays
inArray = orderIn.split(" ");
outArray = orderOut.split(" ");
massArray = mass.split(" ");

//divide into cycles
let index = 0;
let spareArray =[];
let draftArray =[];
draftArray = [...inArray]
const findNumbers = () => {
    simpleArray.push(pickedNum);
    for(let j = 0; j < n; j++) {
        if(pickedNum === outArray[j]) {
            pickedNum = spareArray[j];
            draftArray[j] = " ";
            if (pickedNum === spareNum) {
                cyclesArray.push(simpleArray);         
                simpleArray = [];
                return 0;
            }   
            else {
                return findNumbers();
            }         
        }
    } 
};
do {
    if(draftArray[index] !== " "){
        pickedNum = draftArray[index];
        spareNum = pickedNum;
        spareArray = [...draftArray];
        draftArray[index] = " ";
        findNumbers();
    };
    isFinished = draftArray.every((value) => {
        return value === " ";
    });
    index++;
}while(!isFinished);

//get parameters
minGlobalWeight = Math.min(...massArray);
for (let i = 0; i < cyclesArray.length; i++) {
    simpleMassArray = [];
    for (let j = 0; j < cyclesArray[i].length; j++) {
        simpleMassArray.push(massArray[cyclesArray[i][j]-1]);
    }
    cyclesMasses.push(simpleMassArray);
};
for (let i = 0; i < cyclesMasses.length; i++) {
    minCycleWeight = Math.min(...cyclesMasses[i]);
    cycleMassSum = 0;
    for (let j = 0; j < cyclesMasses[i].length; j++) {
        cycleMassSum += Number(cyclesMasses[i][j]);
    }
    method1 = cycleMassSum + (cyclesMasses[i].length - 2) * minCycleWeight;
    method2 = cycleMassSum + minCycleWeight + (cyclesMasses[i].length + 1) * minGlobalWeight;
    result += Math.min(method1,method2);
};
console.log(result);