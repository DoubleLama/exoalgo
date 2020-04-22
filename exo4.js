let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(`\n- Voici une liste d'immeubles alignés d'Ouest en Est \n et affichés en fonction de leur nombre d'étages : ${data} .\n`);
    console.log(`-- Combien peuvent voir un coucher de soleil?\n`);
    if (error) {
        console.log(error);
        return ;
    }
    buildings = data.split(" ").map((number)=>{return parseInt(number)})

const sunny = (buildings) =>{
    let j = 1
    let count = 1
    for(let i=0; i<buildings.length; j++){
        if(j == buildings.length){
            i++
            j = i+1
            count ++
            // console.log(count);
        }
        if(i == buildings.length -1){
            return count
        }
        if(buildings[i]<buildings[i+1]){
            // console.log(i, j);
            i ++
        }
    }
    console.log(count);
    if(count == 1){
        console.log(`=> Apparemment seul le dernier immeuble est ensoleillé\n`);
    }else{
        console.log(`=> On dirait que ${count} immeubles sont ensoleillés\n`);
    }
}

sunny(buildings)

})
3, 7, 8, 3, 6, 1 









const exo4 = (data) => {
    let count = 0;
    let j = 0;
    for (let i = 0; i < data.length; i++) {
      if (j === data.length - 1) {
        count ++;
        return count;
      }
      if (data[i] > data[j]) {
        i = j;
        j++;
      }
      if (i === data.length - 1) {
        count ++;
        i = j;
        j++;
      }
    }
  };