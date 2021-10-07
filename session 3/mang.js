// // // Init(after 2) Initialize an array named movies containing the titles of some of your favorite movies

// let movies = ['Game of thrones', 'Harry Potter', 'Saving Private Ryan', 'Avengers', 'Captain America'];
// console.log(movies);


// // Create(after 4) Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users

// // let newMovie = prompt('Enter a movie you like');
// // movies.push(newMovie);
// // console.log(movies)

// // Read(after 5) Read the item at position i in the movies array, i entered by users

// // let i = prompt('Enter the position');
// // let boPhim = movies[i];
// // console.log(boPhim)


// // Update(after 6)
// // 1. Update the first item of the movies array into movieTitle, movieTitle entered by users

// // let movieTitle = prompt('Update movie');
// // movies[0] = movieTitle;
// // console.log(movies)
// // 2. Update a item at position i of the movies into movieTitle, i and movieTitle entered by users

// // let i = prompt('Position of movie');
// // let movieTitle = prompt('Update movie');
// // movies[i] = movieTitle;
// // console.log(movies)


// // Delete(after 7)
// // 1. Delete 1 item at position i from movies array movies, i entered by users

// // let a = prompt('Delete position');
// // movies.splice(a, 1);
// // console.log(movies)
// // // 2. Delete n item at position i from movies array, i and n entered by users

// // let i = prompt('Delelte position');
// // n = prompt('How many item');
// // movies.splice(i, n);
// // console.log(movies)



// // Read All(after 10)
// // 1. Read or log all of items in movies array into console

// // for(let i = 0; i < movies.length; i++){
// //     console.log(movies[i])
// // }
// // 2.Read or log only first half items in movies array into console

// // for (let i = 0; i < Math.floor(movies.length/2); i++){
// //     console.log(movies[i])
// // }
// // 3 + Update all 
// for (let i = 0; i < movies.length; i++){
//     movies[i] = movies[i].toLowerCase()
//     console.log(i+1 + '. ' + movies[i])
// }




// Purpose of While (after 14)
// Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.

// while(true){
//     let name = prompt('Register an username');
//     let chieudai = name.length;
//     if(chieudai > 15){
//         alert('Your username is too long');
//     } else{
//         alert('Good username');
//         break;
//     }
// }




// Write a script to show user a quiz with 4 choices
// while(true){
//     let answer = prompt('Vuot den do chi danh cho \n1. Xe bus \n2. Xe cuu thuong \n3. Nguoi nguc lep \n4. Nguoi it hoc');
//     if(answer == 2){
//         alert('Bravo, you are correct');
//         break;
//     } else if(answer == 1 || answer == 3 || answer == 4){
//         alert('Good luck next time');
//     } else{
//         alert('Invalide choice, the answer must be 1, 2, 3 or 4');
//     }
// }
















