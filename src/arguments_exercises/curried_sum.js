//  example 
function sumThree (num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30


function curry (numArgs) {
    let args = [];

    function curriedSum (nums) {
        args.push(nums);

        if (args.length === numArgs) {

            let result = 0;

            args.forEach(
                (element) => {
                    result += element;
                }

            );
            return result;

        }
        else {
            return curriedSum;
        }

    };

    return curriedSum;
}

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// console.log(f1);
// f1 = f1(20); // [Function]
// console.log(f1);
// f1 = f1(6); // = 30
// console.log(f1);

// // or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30



const sum = curry(4);
console.log(sum(5)(30)(20)(1)); // => 56


// part 2 unnlimited args



Function.prototype.curry = function (numArgs) {
    let numbers = [];
    let that = this;
    function curriedSum1 (num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            // let result = 0;
            // numbers.forEach((ele)=>{result+=ele;})
            // return result;
            return that(...numbers); // doesnt give the right answer
        }
        else {

            return curriedSum1;
        }
    }
    return curriedSum1;
};


const sum1 = sumThree.curry(4);
console.log(sum1(5)(30)(20)(1)); // => 56



Function.prototype.curryapply = function (numArgs) {

    const args = [];
    const that = this;
        function curriedSum2 (num){
            args.push(num);

            if (args.length === numArgs){
                    return that.apply(null,args);
            }
            else{
                return curriedSum2;
            }
        } 
        return curriedSum2;

}



const sum2 = sumThree.curryapply(4);
console.log(sum2(5)(30)(20)(1)); // => 56