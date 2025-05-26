const twoSum = (nums = [2, 7, 7, 8, 8, 11], targetSum = 9) =>{
    let numToIndex = {};

    for(let i=0; i<nums.length; i++){
        let complement = targetSum - nums[i];

        if(numToIndex.hasOwnProperty(complement)){
            return[i, numToIndex[complement]];
        }
        numToIndex[nums[i]] = i;
    }

    return [];
};


console.log(twoSum());