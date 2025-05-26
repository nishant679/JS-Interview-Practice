const reverseWords = (sentence = 'please reverse me!') =>{
    let reversed = sentence.split(' ').reverse().join(' ');

    console.log(reversed);
};

const reverseWordsAndStrings = (sentence = 'please reverse me!') =>{
    let reversed = sentence.split(' ').split('').reverse().join('').reverse().join(' ');

    console.log(reversed);
};

reverseWords();
reverseWordsAndStrings();