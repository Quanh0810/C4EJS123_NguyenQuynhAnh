// Cau 4:
// let dic = {
//     'debug' : "The process of figuring out why your program has a certain error and how to fix it",
//     'done' : "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//     'defect' : "The formal word for ‘error’",
//     'pm' : "The short version  of Project Manager, the person in charge of the final result of a project",
//     'ui/ux' : "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
// };


// 4.1 Write a script to simulate the lookup of the dictionary initialized in the previous example

// while(true){
    // let arr = [];
    // for(let x in dic){
    // arr.push(x)
    // }
//     alert('Hi there, this is dev dictionary');
//     
//     let keyword = prompt('Enter a keyword');
//         if(arr.includes(keyword)){
//             alert(`${x} \n${dic[keyword]}`);
           
//         }else{
//             alert('We could not find your word dev');
//             break
//         }
//     }
// }


// 4.2 Update your script so that it can let users contribute the explanation to the dictionary

// while(true){
//     let arr = [];
//     for(let x in dic){
//     arr.push(x)
//     }
//     while(true){

//     alert('Hi there, this is dev dictionary');
//     let keyword = prompt('Enter a keyword');
//     if(arr.includes(keyword)){
//             alert(`${keyword} \n${dic[keyword]}`);
//             break
//     }else {
//             let explan = prompt(`We could not find your word: ${keyword}, leave your explanation`);
//             alert('Done');
//             dic[keyword] = explan;
//             break
//     }
//     }
// }




// Cau 5 :
// 5.1 Print/log name and price of all the products out 
let products = [
    {
        id: 1,
        name: 'Xiaomi portable charger 20000mah', 
        brand: 'Xiaomi',
        price: 428, 
        color: 'white',
        category: 'charger'
    }, 
    {
        id: 2,
        name: 'VSmart Active 1', 
        brand: 'VSmart',
        price: 5487, 
        color: 'black',
        category: 'phone'
    }, 
    {
        id: 3,
        name: 'IPhone X', 
        brand: 'Apple',
        price: 21490, 
        color: 'gray',
        category: 'phone'
    }, 
    {
        id: 4,
        name: 'Samsung Galaxy A9', 
        brand: 'Samsung',
        price: 8490, 
        color: 'blue',
        category: 'phone'
    }, 
];

// for(let i = 0; i < products.length; i++){
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
// }


// 5.2 Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
// for(let i = 0; i < products.length; i++){
//     console.log(`#${i+1}. Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
// }
let position = prompt('Enter product position');
let {name, brand, price, color, category} = products[position-1];
console.log(`Name: ${name}`);
console.log(`Price: ${price}`);
console.log(`Color: ${color}`);
console.log(`Category: ${category}`);



// 5.3 Write a script printing/logging out the products based on category input by users


