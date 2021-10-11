// Bai 1: Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
Đầu vào: str_input 
Đầu ra: đảo ngược chuỗi và in ra kết quả

let str_input = "Test kho qua thay oi";
let newString = "";
for (let i = str_input.length - 1; i >= 0; i--){
    newString += str_input[i];
    
}
console.log(newString)



// Cau 2: Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)

let str = "my name is Quynh Anh";
let splitStr = str.toLowerCase().split(" ")
for(let i = 0; i < splitStr.length; i++){
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1)
}
console.log(splitStr.join(" "))


// Cau 3: Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.

let arr = [1, 5, 3, 6, 1, 3, 5, 8, 7, 2, 3, 1, 3];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) == -1){
        newArr.push(arr[i])
    } 
}
console.log(newArr)


// Cau 4: Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
let nhanVien = [
    {
       name : 'Nguyen Van A',
       age : 20,
       salary : 5000000,
       position : 'Tro giang'
    },
    {
        name : 'Vu Duc B',
        age : 34,
        salary : 10000000,
        position : 'Giang vien'
    },
    {
        name : 'Nguyen Thi C',
        age : 18,
        salary : 4500000,
        position : 'Le tan'
    }

];
// Read
for(let i = 0; i < nhanVien.length; i++){
    console.log(`Name: ${nhanVien[i].name}`);
    console.log(`Age: ${nhanVien[i].age}`);
    console.log(`Salary: ${nhanVien[i].salary}`);
    console.log(`Position: ${nhanVien[i].position}`);
    console.log('-------------------------------------------')
}

let x = prompt('Enter your option')
// Create
let newNv = {}
if(x == 'create'){
    let newName = prompt("Ten nhan vien muon them");
    let newAge = prompt("Tuoi cua nhan vien");
    let newSalary = prompt("Luong cua nhan vien");
    let newJob = prompt("Chuc vu cua nhan vien");
    alert('Done');
    newNv.name = newName;
    newNv.age = newAge;
    newNv.salary = newSalary;
    newNv.job = newJob;
    nhanVien.push(newNv);
    for(let i = 0; i < nhanVien.length; i++){
        console.log(`Name: ${nhanVien[i].name}`);
        console.log(`Age: ${nhanVien[i].age}`);
        console.log(`Salary: ${nhanVien[i].salary}`);
        console.log(`Position: ${nhanVien[i].position}`);
        console.log('-------------------------------------------')
        
    }
}


// Update
// let updateNv {}
if(x == 'update'){
    let viTri = prompt('Vi tri muon update');
    let upDateten = prompt('Tên nhân viên mới');
    let upDatetuoi = prompt('Tuoi cua nhan vien');
    let upDateluong = prompt('Luong cua nhan vien');
    let upDatevitri = pro('Chuc vu cua nhan vien');
    alert('Done');
    nhanVien[viTri].name = upDateten;
    nhanVien[viTri].age = upDatetuoi;
    nhanVien[viTri].salary = upDateluong;
    nhanVien[viTri].position = upDatevitri;
    for(let i = 0; i<nhanVien.length; i++){
        console.log(`Name: ${nhanVien[i].name}`);
        console.log(`Age: ${nhanVien[i].age}`);
        console.log(`Salary: ${nhanVien[i].salary}`);
        console.log(`Position: ${nhanVien[i].position}`);
        console.log('-------------------------------------------')
    }

}



// // Delete
if(x == 'delete'){
    let positionDel = prompt('Vi tri muon delete');
    nhanVien.splice(positionDel, 1);
    console.log(`Name: ${nhanVien[i].name}`);
    console.log(`Age: ${nhanVien[i].age}`);
    console.log(`Salary: ${nhanVien[i].salary}`);
    console.log(`Position: ${nhanVien[i].position}`);
    console.log('-------------------------------------------')
    
}





