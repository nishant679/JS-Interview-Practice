// "Design and implement a JavaScript function computeAmount() that allows for method chaining to calculate a total monetary 
// value based on Indian numbering system denominations. The function should support chaining methods for lakh, crore, thousand, 
// and hundred, each accepting a numerical argument. Finally, a value() method should be called to return the accumulated total.
// For example, computeAmount().lakh(20).crore(10).thousand(200).hundred(80).value() should correctly calculate the sum."
console.log("This Value", this)
const computeAmount = () =>{
    
    let totalAmount = 0;

    let denominations = {
        hundred : 100,
        thousand: 1000,
        lakh: 100000,
        crore: 10000000
    }

    const chainMethod = {
        hundred : function(num) {
            totalAmount += num * denominations['hundred'];
            return this;
        },
        thousand : function (num) {
            totalAmount += num * denominations['thousand'];
            return this;
        },
        lakh : function (num){
            totalAmount += num * denominations['lakh'];
            return this;
        },
        crore : function (num){
            totalAmount += num * denominations['crore'];
            return this;
        },
        value : function (){
            return totalAmount;
        }
    };

    return chainMethod;
};

console.log(computeAmount().thousand(7).lakh(9).crore(5).crore(23).thousand(4).hundred(23).value());