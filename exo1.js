let k = 17
let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(`\n- Voici un liste : : ${data}.\n`)
    console.log(`-- Peux-t'on additionner 2 numéros de cette liste pour trouver "${k}" ?\n`); 
    if (error) {
        console.log(error);
        return ;
    }
    data = data.split(" ").map((number)=>{return parseInt(number)})


const sumBoth = (data, k) =>{
    let l = data.length
    for(let i=0; i<l; i++){
        for(let j=0; j<l; j++){
            if(data[i] + data[j+1] == k){
                console.log(`Après ${i+1} tours de boucle (le calcul ${data[i]} + ${data[j+1]} = ${k})\n`)
                return true
            }
        }

    }
}

const checkIt = (data,k) =>{
    if(sumBoth(data,k) == true){
        console.log(" => Yes we can !\n");
    }else{
        console.log(" => Nope, sorry bro\n");
    }
}
checkIt(data,k)
})