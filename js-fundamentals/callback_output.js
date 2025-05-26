console.log("A");

setTimeout(()=>{
    console.log("B from callback")
})
let myArr = ["C", "D", "E", 'F', "G", "H", "I"];
myArr.forEach(element => {
    console.log(element)
});

console.log("E")

["C", "D", "E", 'F', "G", "H", "I"].forEach(element => {
    console.log(element)
});