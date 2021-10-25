// 8. Write a function, using alert to show your name and one thing you wish to do this year
function quynhAnh(){
    alert('My name is Quynh Anh');
    alert('My wish now is to finish this dl');
}
quynhAnh()




// 9. Write a function, using alert to show user’s name and one wish of the user this year, name and wish are function parameters

function hi(name, wish){
    alert(`My name is ${name}`);
    alert(`My wish is ${wish}`);
}
hi('QA','no wish')



// 10. Write a function, using alert to show user’s name and one wish of the user in this year, name and wish are function parameters. Handle the case of missing wish in function parameters
let a = prompt('Enter your name');
let b = prompt('Your wish?');
function hi(name, wish) {
    

    if (wish == "") {
        alert(`${name} wish nothing}`);
    } else {
        alert(`My nme is ${name} and this year I wish ${wish}`);
    }
}
hi(a, b)





// 11. Write an HTML for the UI above, create and link a JS file to it
let a = document.getElementById('upper_btn');
let b = document.getElementById('name_input');
let c = document.getElementById('result');
console.log(a);
console.log(b);
console.log(c);
a.addEventListener('click',()=>{
    let name = document.getElementById('name_input').value;
    console.log('Upper it! Just clicked');
    console.log(`User's name: ${name}`);
    console.log(`User's name uppercase: ${name.toUpperCase()}`);
    c.textContent = name.toUpperCase();
});









