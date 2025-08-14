const fibonacci = function(num) {
    // Convert input to a number if it's a string
    if (typeof num === 'string') {
        num = parseInt(num, 10);
    }
    
    // Handle negative numbers
    if (num < 0) {
        return "OOPS";
    }
    
    // Base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    // Initialize the first two Fibonacci numbers
    let a = 0, b = 1, temp;
    
    // Calculate Fibonacci number iteratively
    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
};


// Do not edit below this line
module.exports = fibonacci;
