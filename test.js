let sampleArr = [0, 1, 3, 5, 7, 2, 12, 8, 9, 23, 14, 10, 11, 24, 25];

function findIndices(){
    let arr = [];
    for(let i=0;i<sampleArr.length-1;i++){
        for(let j=i+1;j<sampleArr.length;j++){
            if(sampleArr[i]+sampleArr[j]===30){
                arr.push({i,j});
            }
        }
    }
    console.log("array of Indeces", arr);
    return arr;
}

findIndices();
