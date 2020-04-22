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
    let count = 0
    for(let i=0; i<buildings.length; i++){
        let sun = 1;
        for(let j=i;j<buildings.length; j++){
            if(buildings[i]<buildings[j]){
                sun = 0
            }
        }
        count += sun
    }   

    if(count == 1){console.log(`=> Apparemment seul le dernier immeuble est ensoleillé\n`);}
    else{console.log(`=> On dirait que ${count} immeubles sont ensoleillés\n`);}
}

sunny(buildings)
})