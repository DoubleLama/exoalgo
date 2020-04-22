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
    let l = buildings.length
    let count = 1
    for(let i=0; i<l; j++){
        if(j == l){
            i++
            j = i+1
            count ++
        }
        if(buildings[i]<buildings[j]){
            i ++
        }
        if(i == l-1){
            if(count == 1){
                console.log(`=> Apparemment seul le dernier immeuble est ensoleillé\n`);
            }else{
                console.log(`=> On dirait que ${count} immeubles sont ensoleillés\n`);
            }
            return count
        }
    }
}
sunny(buildings)
})