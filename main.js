/*console.log("Hello world");
//alert("Hello");
// Khai báo biến và không gán giá trị cho biến
let age;
age = 35;
age = "haha";

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn";
email = 90;
console.log(email);
const PI = 3.14;
//PI = 90; -> errorlet 
let firstName = "Nguyễn";
let lastName = "Thu Hằng";
console.log('ten toi la: ');
console.log(1 +"0");
console.log(1 -"0");
console.log(2 * '6');
console.log(9 / "2");
console.log("2" * "3");
const sum2 = (a,b) => a+b;
console.log(sum2(3,4)); 
console.log(sum2(3)); 
console.log(sum2); 
let name = "Bùi Hiên"
let year = 1997
console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`);
let totalMoney = 0;
for (let day = 1; day <= 10; day++) {
    // totalMoney = totalMoney + 100000;
    totalMoney += 100000;
}
//Nghỉ ngày 20
console.log(totalMoney);
for (let day = 1; day <= 30; day++) {
    if (day == 20) {
        console.log("Chán quá. Nghỉ thôi");
        break;
    }
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
//7 ngày nghỉ 1 lần
for (let day = 1; day <= 30; day = day + 1) {
    if (day % 7 == 0) {
        console.log("Nghỉ");
        continue;
    }
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
//Những ngày chẵn tiết kiệm 200.000, ngày lẻ 100.0000
//Tiết kiệm đến ngày số 8 thì hết tiền -> dừng lại
let money = 0;
for (let day = 1; day <= 30; day++) {
    if (day % 2 == 0) {
        money += 200000;
    }
    else money += 100000;
    if(day == 8) {
        console.log("Ngay thu 8 roi nghi thoi");
        break;
    }
    console.log(money);
}
//vong lap 10
function repeatString(str) {
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += str;
    }
    return result;
  }
console.log(repeatString("nah"));
//them dau -
function repeatString1(str) {
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += str + "-";
    }
    return result;
  }
console.log(repeatString1("nah").substring(0, repeatString1("nah").length - 1));
// them so lan
function repeatString2(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += str + "-";
    }
    return result;
  }
console.log(repeatString2("nah",3).substring(0, repeatString2("nah",3).length - 1));
// tong cac so chia het cho 5
    let count = 0;
    for (let i = 0; i<=100; i++){
        if(i%5==0) count += i;  
    }
console.log(count);
// the tich hinh cau
function areaOfSphere(r){
    const PI = 3.14;
    let area = (4/3) * PI * r**3;
    return area.toFixed(2);
}
console.log(`dien tich hinh cau la: ${areaOfSphere(3)} `);
// tong cac so nam giua
function sumOfBetween(a, b){
    let sum = 0;
    if(a>b){
        for(let i = b+1; i<a;i++ ) sum += i;
    }
    else if(b>a){
        for(let i = a+1; i<b;i++ ) sum += i;
    }
    else return 0;
    return sum;
}
console.log(`Tong cua cac so nam giua la la: ${sumOfBetween(2,3)}`);
// kiem tra so nguyen to
function check(n){
    let check = true;
    for(let i = 2;i<n;i++){
        if(n%i==0) return false
    }
    return check;
}
if(check(11)==true) console.log("la so nguyen to");
else console.log("Khong phai so nguyen to");
function checkSum(n){
    let sum = 0;
    for(let i = 0;i<n;i++){
        if(n%i==0) return false
    }
    return check;
}*/
// Bài 1
function calculateFactorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
console.log(calculateFactorial(8));
// Bai 2
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
console.log(reverseString('hieu'));
// Bai 3
function translate(countryCode) {
    switch (countryCode) {
      case 'VN':
        return 'Xin chào';
      case 'EN':
        return 'Hello';
      case 'FR':
        return 'Bonjour';
      case 'CN':
        return 'Nǐ hǎo';
      case 'JP':
        return 'Konichiwa';
      default:
        return 'Không tìm thấy mã quốc gia';
    }
  }
  console.log(translate('CN'))
  // Bai 4
  function subString(str) {
    if (str.length <= 15) {
      return str;
    } else {
      return str.substring(0, 10) + '...';
    }
  }
  console.log(subString('baeethfjhgjkgkjgkdhjdkd'))
  