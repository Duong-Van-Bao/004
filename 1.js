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
var x;
x = 10;
console.log(x);
// kieu du lieu
//mang chu
var hocvien;
hocvien = ['teo', 'huy', 'lam'];
for (var i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}
// kieu so
var songuyen = [2, 4, 6];
for (var i = 0; i < songuyen.length; i++) {
    console.log(songuyen[i]);
}
/** End*/
// kieu dung sai
var flag;
flag = true;
console.log(flag);
// kieu enum
var trangthai;
(function (trangthai) {
    trangthai[trangthai["moidangky"] = 10] = "moidangky";
    trangthai[trangthai["dathutien"] = 100] = "dathutien";
    trangthai[trangthai["hoanthanh"] = 1000] = "hoanthanh";
})(trangthai || (trangthai = {}));
;
console.log(trangthai.moidangky);
// kieu tuple
var tuple1;
tuple1 = ['Vietnd', 31, 'Giao viên'];
console.log(tuple1[1]);
