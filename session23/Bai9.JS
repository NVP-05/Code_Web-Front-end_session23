function generateFibonacciSequence(limit) {
    let sequence = [0, 1];
    let currentSum = 1;
    while (currentSum < limit) {
      let nextFibonacci = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextFibonacci);
      currentSum += nextFibonacci;
    }
    return sequence;
  }
  function printFibonacciSequence() {
    const userInput = prompt("Nhập một số nguyên dương: ");
    const limit = parseInt(userInput);
  
    if (isNaN(limit) || limit <= 0) {
      console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
      return;
    }
    const fibonacciSequence = generateFibonacciSequence(limit);
  
    console.log(`Dãy Fibonacci sao cho tổng giá trị nhỏ hơn ${limit} là:`);
    console.log(fibonacciSequence.join(", "));
  }
  printFibonacciSequence();