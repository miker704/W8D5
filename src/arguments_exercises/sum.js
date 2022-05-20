console.log("sum function with out ... operator");

function sum () {
    let res = 0;
     let args = Array.from(arguments);
     for(let num of args){
         res+=num;
     }
    return res;
}




console.log(sum(1, 2, 3, 4));    //=== 10)
console.log(sum(1, 2, 3, 4, 5));   //=== 15)


console.log("sum function with ... operator");


function sum_s (...arguments) {
    let res = 0;
    for (let arg of arguments) {
        res += arg;
    }

    return res;
}


console.log(sum_s(1, 2, 3, 4));    //=== 10)
console.log(sum_s(1, 2, 3, 4, 5));   //=== 15)