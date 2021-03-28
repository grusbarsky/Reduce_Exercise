function extractValue(arr, key){
     return arr.reduce(function(accumulator, nextValue){
         accumulator.push(nextValue[key]);
        return accumulator;
    },[]);
}

function vowelCount(str){
    const vowels = "aeiou";
    let splitStr = str.split("");
    return splitStr.reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, nextValue, index){
        accumulator[idx][key] = value;
        return accumulator;
    },arr);
}

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}
