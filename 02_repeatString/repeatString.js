const repeatString = function(string, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    if (num < 0) {
        return 'ERROR';
    } else {
        return result;
    }
};

repeatString('hey', 3); // heyheyhey
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('hey', 10);
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;