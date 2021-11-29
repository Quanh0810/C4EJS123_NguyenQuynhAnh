// 1. Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

let nameInput = ["Phuong", "Hanh", "Thang", "Anh", "Hoa",];
function allLongestStrings(arr) {
    let longEst = arr[0].length;

    for (let i = 0; i < nameInput.length; i++) {
        if (longEst < arr[i].length) {
            longEst = arr[i].length;
        }
    }
    console.log(longEst);

    let result = []
    for (let i = 0; i < nameInput.length; i++) {
        if (arr[i].length == longEst) {
            result.push(arr[i]);
        }
    }

    console.log(result)
}
allLongestStrings(nameInput);



// 2.Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

let inputArr = ["23", "64", "12", "65", "34", "40"];
function alternatingSums(arr){
    let result = [];
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i< inputArr.length; i++){
        if(i % 2 == 0){
            sum1 = sum1 + arr[i];
        } else {
            sum2 = sum2 + arr[i];
        }
    }
    result.push(sum1, sum2);
    console.log(result)
}

alternatingSums(inputArr);
    

