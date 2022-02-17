let n = 6;
const ms = "2400 2000 1200 2400 1600 4000";
const orderIn = "1 4 5 3 6 2";
const orderOut = "5 3 2 4 6 1";
let inArray = [];
let outArray = [];
let cyclesArray = [];
let simpleArray =[];
let pickedNum;
let isFinished = false;

//convert to arrays
for (let i = 0; i < orderIn.length; i++) {
    if (orderIn.charAt(i) !== " ") {
        inArray.push(orderIn.charAt(i));
    }
}
for (let i = 0; i < orderOut.length; i++) {
    if (orderOut.charAt(i) !== " ") {
        outArray.push(orderOut.charAt(i));
    }
};

//divide into cycles
let index = 0;
let spareArray =[];
const findNumbers = () => {
    simpleArray.push(pickedNum);
    for(let j = 0; j < n; j++) {
        if(pickedNum === outArray[j]) {
            pickedNum = spareArray[j];
            inArray[j] = " ";
            if (pickedNum === spareNum) {
                cyclesArray.push(simpleArray)           
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
    if(inArray[index] !== " "){
        pickedNum = inArray[index];
        spareNum = pickedNum;
        spareArray = [...inArray];
        inArray[index] = " ";
        findNumbers();
    };
    isFinished = inArray.every((value) => {
        return value === " ";
    });
    index++;
}while(!isFinished);