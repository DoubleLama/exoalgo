let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(`Avant le tri : ${data}`);
    if (error) {
        console.log(error);
        return ;
    }
    data = data.split(" ").map((number)=>{return parseInt(number)})

let fusionSort = (data) => {


console.log(`\nTri par fudion : ${count} comparaisons\n`);
}
console.log(`Après le tri : ${data}`);
fusionSort(data)
})

var countMergeSort=0
mergeSort=(unsortedArray)=> {
    countMergeSort++
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }
const merge = (left, right)=> {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }