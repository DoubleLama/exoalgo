let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(`\nAvant le tri : ${data}`);
    if (error) {
        console.log(error);
        return ;
    }
    data = data.split(" ").map((number)=>{return parseInt(number)})

const oddEvenSort = (data) =>{
    let l = data.length
    let count = 0
    for(let i=1; i<l-1; i++){
        for(let j=0; j<l-1; j+=2){
            // console.log(data);
            if (data[j]>data[j+1]){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
            count ++
        }
        for(let k=1; k<l-1; k+=2){
            // console.log(data);
            if (data[k]>data[k+1]){
                let temp = data[k];
                data[k] = data[k+1];
                data[k+1] = temp;
            }
            count ++
        }
    }
    console.log(`\nTri pair-impair : ${count} comparaisons\n`);
    console.log(`Après le tri : ${data}\n`);
}
oddEvenSort(data)
})
