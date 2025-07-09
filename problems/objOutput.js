let obj = {
    helloworld : function () {
        return this.name
    },
    name : "Nishant"
};

let obj2 = {
    helloworld: obj.helloworld,
    name : "Amisha"
};

console.log(obj2.helloworld());