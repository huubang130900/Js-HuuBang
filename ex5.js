const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6, 7, 8];

const name = {
    name1: "Hữu Bằng", 
    name2: "Hoàng Nam"
};

const dslop = {
    ...name,
    name3: "Hoàng Lương",
    name4: "Hoàng văn"
}
console.log(name);
console.log(dslop);

console.log(array1);
console.log(array2);