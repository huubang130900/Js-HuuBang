//Hàm
function Hello(name){
    console.log(name);

}
//Cách viết khác
const hello1 = function(name){
    console.log(name + " đến từ hello1");
}

//Cách viết hàm trong JS es6
const hello2 = (name) =>{
    console.log(name + " Đến từ hello hiện đại:")
}

//Nếu chỉ có 1 tham sôs, và 1 giá trị return
const tinhBinhPhuong = so => so * so;
console.log(tinhBinhPhuong(2));

Hello('Hữu Bằng');
hello1('Hoảng Nam');
hello2('Hoàng Lương');