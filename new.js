function remove (foods){
    const result = [];
    let countEgg = 0;
    for(let i = 0; i < foods.length; i++){
        if(foods[i] === 'egg' && countEgg < 2){
            countEgg += 1;
            continue;
        }
        result.push(foods[i]);
    }
 return result;
}

console.log(remove(['egg','apple','egg','egg','egg','apple']))