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
    let j = 1
    for(let i=0; i<data.length; j++){
        if(j == data.length){
            j = i+1
            i ++
        }
        if(data[i] + data[j] == k){
            console.log(`Après ${i+1} tours de boucle (le calcul ${data[i]} + ${data[j]} = ${k})\n`)
            return true
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