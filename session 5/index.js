// // 1.1 Learn how to create a random number from 0 to 1
let x = (Math.random().toFixed(2) )*1
console.log(x)


// // 1.2 Learn how to randomly pick an item from an array
let arr = [3,6,4,8,12,34];
console.log(arr[Math.floor(Math.random() * arr.length)])

// // 1.3 Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice. Create it then ask your mentor to review your data before moving to the next exercise
// let quizz = [
    {
        question: "Nhà em ở đâu thế?",
        answer: "A. Sông Công \nB. Sông Mã \nC. Sông Hồng \nD. Sông Cửu Long",
        correct: "A",
    },
    {
        question: "Em ăn cơm chưa?",
        answer: "A. Rồi \nB. Chuẩn bị \nC. Chưa \nD. Không ăn",
        correct: "D",
    },
    {
        question: "Em ăn cơm với gì?",
        answer: "A. Rau \nB. Thịt \nC. Canh \nD. Cá",
        correct: "C",
    }
]



// // 1.4 Write a script to randomly select a quiz from the list above, show them to users
let ranQuizz = Math.floor(Math.random() * quizz.length);



// // 1.5 Let users answer then let them know whether they are correct

let use = prompt(`${quizz[ranQuizz].question} \n${quizz[ranQuizz].answer}`);
if(use == quizz[ranQuizz].correct){
    alert('You are right');
}else{
    alert('You are wrong')
}


// // 1.6 + 1.7 + 1.8 Let it run continuously, make sure each question only appears once, if the questions has run out, let users know (note that the result showing to users are omitted in the figure below)



while(true){
    let point = 0;
    let use = prompt(`${quizz[ranQuizz].question} \n${quizz[ranQuizz].answer}`);
    if(use == quizz[ranQuizz].correct){
        point++;
    }
    quizz.splice(ranQuizz,1);
    if(quizz.length == 0){
        alert('We are out of question');
        alert(`Your answered correctly ${point} of ${quizz.length}`);
        break;
    }
}





// 2.1 Here are the following list of words
[‘to’, ‘be’, ‘that’, ‘of’, ‘elon’, ‘to’, ‘this’, ‘now’, ‘back’, ‘cool’, ‘hey’, ‘love’, ‘of’, ‘life’, ‘that’, ‘rain’, ‘summer’, ‘color’, ‘now’, ‘of’, ‘hat’, ‘late’, ‘sorry’, ‘my’, ‘team’]
Write a program to count the occurrences of the words

let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let a = [];
let b = [];
let prev;
arr.sort();
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== prev){
        a.push(arr[i]);
        b.push(1);
    }else{
        b[b.length-1]++;
    }
    prev = arr[i]
}
console.log(`${a} : ${b} `)



// 2.2 Create and array to store a list of laptops in inventory, the data is as follow
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]


// 2.3 The above data is good to deal with all of the laptops equally, but when it comes to grouping the items by brand, it should be reshaped as below. Write a program to do the reshaping from inventory, from now, use the reshaped data to process
let inventoryByBrand = {
    'Asus': [],
    'Dell': [],
    'HP': [],

}
for(let i = 0; i < inventory.length; i++){
    let sanPham = inventory[i];
    let thuongHieu = inventory[i].brand;
    inventoryByBrand[thuongHieu].push(inventory[i])
}
console.log(inventoryByBrand)



// 2.4 From inventoryByBrand, write a program to count the generations of a certain brand in the inventory
let x = prompt('Which brand?');

for(let brand in inventoryByBrand){
    if(x == brand){
        alert(`There are ${inventoryByBrand[brand].length} generations of "${brand}" in the inventory"`)

    }

}



// 2.5 + 2.6 + 2.7 Add more details in the statistics
let listName = inventoryByBrand[x];
console.log(listName);
let tenMay = [];
let gia;
let total = 0;
for(let i = 0; i < listName.length; i++){
    tenMay.push(listName[i].name);
    gia = listName[i].price * listName[i].quantity;
    total = total + gia;
}
alert(`${tenMay}`)
alert(`With total value ${total}`)
















