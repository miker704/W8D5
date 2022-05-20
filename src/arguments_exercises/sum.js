

function sum (...arguments) {
    let res = 0;
    for (let arg of arguments) {
        res += arg;
    }

    return res;
}


console.log(sum(1, 2, 3, 4));    //=== 10)
console.log(sum(1, 2, 3, 4, 5));   //=== 15)