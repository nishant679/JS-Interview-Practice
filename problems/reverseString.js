const reverseString = (str = 'example') =>{
    if(typeof(str) === 'string'){
        let reversed = str.split('').reverse().join('');
        console.log(reversed);
    }
    else{
        console.log("Input must be string")
    } 
};

reverseString();
reverseString('nishant kumar');
reverseString(12345);
reverseString('abcdefghijklmanopqrstuvwxyz');