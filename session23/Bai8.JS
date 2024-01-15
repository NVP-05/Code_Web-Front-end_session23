function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  function printPrimesUpToN() {
    const userInput = prompt("Nhập một số nguyên dương: ");
    const n = parseInt(userInput);
    if (isNaN(n) || n <= 0) {
      console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
      return;
    }
    console.log(`Các số nguyên tố nhỏ hơn ${n} là:`);
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  printPrimesUpToN();