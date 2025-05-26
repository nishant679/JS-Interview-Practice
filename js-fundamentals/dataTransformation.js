const obj = [
    {
        key : "sample1",
        value : "data 1"
    },
    {
        key : "sample2",
        value : "data 2"
    },
    {
        key : "sample3",
        value : "data 3"
    },
    {
        key : "sample1",
        value : "data 1"
    },
    {
        key : "sample1",
        value : "data 1"
    },
    {
        key : "sample2",
        value : "data 2"
    },
    {
        key : "sample1",
        value : "data 1"
    },
    {
        key : "sample1",
        value : "data 1"
    },
    {
        key : "sample1",
        value : "data 1"
    },
    {
        key : "sample1",
        value : "data 1"
    }

];


// Need to group the data by key so output should be 

const output = {
    'sample1' : [
        {
            key : "sample1",
            value : "data 1"
        },
        {
            key : "sample1",
            value : "data 1"
        },
        {
            key : "sample1",
            value : "data 1"
        },
        {
            key : "sample1",
            value : "data 1"
        },
    ],
    "sample2" : [
        {
            key : "sample2",
            value : "data 2"
        },
        {
            key : "sample2",
            value : "data 2"
        },
    ],
    "sample3" : [
        {
            key : "sample3",
            value : "data 3"
        }
    ]
};


const groupDataByKey = (inp = obj) =>{
    let output = [];

    obj.forEach((item) =>{
        if(output[item.key]){
            // If the output is having key
            output[item.key].push(item)
        }
        else{
            output[item.key] = [item]
        }
    });

    return output;
};

// Solve using reduce()

const groupByKey = (inp = obj) =>{
    return obj.reduce((acc, item)=>{
        if(acc[item.key]){
            acc[item.key].push(item)
        }
        else{
            acc[item.key] = [item]
        }
        return acc
    }, {});
}

console.log(groupDataByKey());
console.log(groupByKey());
    
