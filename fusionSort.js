let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(`\nAvant le tri : ${data}`);
    if (error) {
        console.log(error);
        return ;
    }
    data = data.split(" ").map((number)=>{return parseInt(number)})

  const fusionSort = (data) => {
    let count = 0;
    const sort = (data) => {
      count++;
      if (data.length <= 1) {
        return data;
      }
      let middle = Math.floor(data.length / 2);
      let left = data.slice(0, middle);
      let right = data.slice(middle, data.length);
      // console.log(data);
      return fusion(sort(left), sort(right));
    };
    
    const fusion = (left, right) => {
      let array = [];
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          array.push(left.shift());
        } else {
          array.push(right.shift());
        }
      }
      while (left.length) {
        array.push(left.shift());
      }
      while (right.length) {
        array.push(right.shift());
      }
      // console.log(array);
      return array;
    };
    
    data = sort(data);

    console.log(`\nTri fusion : ${count} comparaisons\n`);
    console.log(`Après le tri : ${data}\n`);
  }
fusionSort(data)
});