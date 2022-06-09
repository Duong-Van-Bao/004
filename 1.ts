/** begin bài 3 */
// let chu :String;
// chu = 'viet ';

// var chu2 :String ;
// chu2 = "sinh nam 1986";

// console.log(`
//   XIN CHAO ${chu}, có có phải bạn ${chu2}!
// `);
/** end */
/** begin bài 4*/
let x : number ;
x = 10 ;
console.log(x);
// kieu du lieu
//mang chu

var hocvien : string[] ;
hocvien = ['teo','huy','lam'];

for (let i = 0; i < hocvien.length; i++) {
  console.log(hocvien[i]);
}

// kieu so
var songuyen : number[] = [2,4,6];
for (let i = 0; i < songuyen.length; i++) {
  console.log(songuyen[i]);
}
/** End*/
// kieu dung sai   
var flag : boolean;
flag = true;
console.log(flag);

// kieu enum
enum  trangthai {moidangky=10,dathutien=100,hoanthanh=1000};
console.log(trangthai.moidangky);

// kieu tuple

var tuple1 : [string,number,string];
tuple1 = ['Vietnd',31,'Giao viên'];
console.log(tuple1[1]);
