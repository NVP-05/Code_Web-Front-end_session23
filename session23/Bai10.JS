function printRightTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  function printLeftTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = rows; j >= i; j--) {
        row += '* ';
      }
      console.log(row);
    }
  }
  function printTriangles() {
    const userInput = prompt("Nhập một số nguyên dương: ");
    const rows = parseInt(userInput);
    if (isNaN(rows) || rows <= 0) {
      console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
      return;
    }
    console.log(`Tam giác vuông phải:`);
    printRightTriangle(rows);
  
    console.log(`\nTam giác vuông trái:`);
    printLeftTriangle(rows);
  }
  printTriangles();