Function.prototype.myBind = function (context) {
    // console.log(context);
    const that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function bounded_function () {
        const callarg = Array.from(arguments);
        that.apply(context, bindArgs.concat(callarg));
    };
};

Function.prototype.myBind_1 = function (ctx, ...bindArgs) {

    const that = this;
    return (...prevArgs) => that.apply(ctx, bindArgs.concat(prevArgs));

};

class Cat {
    constructor (name) {
        this.name = name;
    }

    says (sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor (name) {
        this.name = name;
    }
}


console.log("using binded function without ... op " + '\n');



const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true
console.log('\n');
console.log("using binded function with ... op " + '\n');


markov.says("meow", "Ned");
// Markov says meow to Ned!
// true  
// bind time args are "meow" and "Kush", no call time args
markov.says.myBind_1(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind_1(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind_1(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays1 = markov.says.myBind_1(pavlov);
notMarkovSays("meow", "me");