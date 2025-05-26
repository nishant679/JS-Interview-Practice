const inp = [1,2, [2,[4,5]], 6, [7, 8, 9], [[[10]]]];

// Output must be [1,2,3,4,5,6,7,8,,9,10]

const flattenedArray = (inpArra = inp, flattened = []) =>{
    
    inpArra.forEach((item) =>{
        if(typeof(item) === 'number'){
            flattened.push(item)
        }
        else{
            return flattenedArray(item, flattened)
        }
    });

    return flattened;
};

console.log(flattenedArray())
console.log(inp.flat())