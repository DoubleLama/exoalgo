let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(`\nAvant le tri : ${data}`);
    if (error) {
        console.log(error);
        return ;
    }
    data = data.split(" ").map((number)=>{return parseInt(number)})


const cocktailSort = (data) =>{
    let l = data.length
    let j = 0
    let count = 0
    let swapped = true
    while (swapped == true) { 
        swapped = false 
        for (let i = j; i < l-1; ++i) { 
            if (data[i] > data[i+1]) { 
                let temp = data[i] 
                data[i] = data[i+1] 
                data[i + 1] = temp 
                swapped = true 
                count ++
                // console.log(1, count);
            } 
        } 
       
        if (swapped == false){break}

        swapped = false 
        for (let i = l-1; i >= j; i--) { 
            if (data[i] > data[i + 1]) { 
                let temp = data[i] 
                data[i] = data[i + 1] 
                data[i + 1] = temp 
                swapped = true 
                count ++
                // console.log(2, count);
            } 
        } 
        j ++
    } 
    console.log(`\nTri cocktail : ${count} comparaisons\n`);
    console.log(`Après le tri : ${data}\n`);
}
cocktailSort(data)
})