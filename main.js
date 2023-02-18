// if-else  
//yeu cau 1:
function checkMark(mark){
    if (mark >= 85){
    console.log("A");
    } else if (mark >= 70 && mark < 85) {
    console.log("B");
    } else if (mark >= 40 && mark < 70){
    console.log("C");
    } else{
    console.log("D");
    }
}
// // yeu cau 2:
function compareNumber(a, b){
    if (a > b){
    console.log(a);
    } else {
    console.log(b);
    }
}
// // yeu cau 3:
function checkNumber(number){
    if (number < 0){
    console.log("Số âm");
    } else if (number > 0){
    console.log("Số dương");
    } else {
    console.log("Số 0");
    }
}
// yeu cau 4:
function checkIfEven(number){
    if (number % 2 == 0){
    console.log("Số chẵn");
    } else {
    console.log("Số lẻ");
    }
}
// yeu cau 5:
function checkDiv3And5(number){
    if (number % 3 == 0 && number % 5 == 0 ){
    console.log("Số chia hết cho 3 và 5");
    } else {
    console.log("Số không chia hết cho 3 và 5");
    }
}
// yeu cau 6:
function checkSum(a, b, c){
if (c == a + b){
    console.log("a + b = c");
    } else {
    console.log("a + b không bằng c");
    }
}




// Vong lap
// yeu cau 1:
function repeatString(str){
    let result = '';
    for (let i = 0; i < 10; i++){
      result += str;
    }
    return result;
}
// yeu cau 2:
function repeatStringWithSeparator(str){
    let result = '';
    for (let i = 0; i < 10; i++){
      if (i < 9){
        result += str + '-';
      } else {
        result += str;
      }
    }
    return result;
}
// yeu cau 3:
function repeatStringNtimesWithSeparator(str, n){
    let result = '';
    for (let i = 0; i < n; i++){
      if (i < n-1){
        result += str + '-';
      } else {
        result += str;
      }
    }
    return result;
}
// yeu cau 4:
function sumOfMultiplesOf5(){
    let result = 0;
    for (let i = 0; i <= 100; i += 5){
      result += i;
    }
    return result;
  }
// yeu cau 5:
function sphereVolume(radius){
    return 4/3 * Math.PI * Math.pow(radius, 3);
}
// yeu cau 6:
function sumInBetween(num1, num2){
    let result = 0;
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for (let i = min + 1; i < max; i++){
      result += i;
    }
    return result;
}
// yeu cau 7:
function isPrime(num){
    if (num <= 1) return false;
  
    for (let i = 2; i < num; i++){
      if (num % i == 0) return false;
    }
    return true;
}
// yeu cau 8:
function sumPrimesBelow(num){
    let result = 0;
    for (let i = 2; i <= num; i++){
      if (isPrime(i)) result += i;
    }
    return result;
}
// yeu cau 9:
function sumDivisors(num){
    let result = 0;
    for (let i = 1; i <= num; i++){
      if (num % i == 0) result += i;
    }
    return result;
}
  
  