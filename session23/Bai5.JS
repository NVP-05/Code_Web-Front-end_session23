let a = Math.floor(Math.random() * 10) + 1;
console.log("Số ngẫu nhiên =" + " " + a);
do{
    let b = +prompt("Nhập 1 số bất kỳ từ 1 đến 10.");
    console.log("Số bạn nhập =" + " " + b);
    if(b < a){
        console.log("Nhỏ hơn.");
    }else if(b > a){
        console.log("Lớn hơn.");
    }else{
        console.log("Đúng.");
        break;
    }
} while(a==100)