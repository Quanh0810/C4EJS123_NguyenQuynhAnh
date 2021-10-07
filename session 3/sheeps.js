// 8.1: Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

let size = [4, 6, 12, 87, 8, 234];
console.log('Hi, my name is QAN  and here is my sheep sizes:')
console.log(...size)


// 8.2: At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
let max = Math.max(...size)
console.log(`Now my biggest sheep has size ${max}, let's shave it`)


// 8.3: When your biggest sheer, its size will return to the default size, which is 8.
indexM = size.indexOf(max);
size[indexM] = 8;
console.log('After shearing, here is my flock:');
console.log(...size)


//8.4: In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
for(let i = 0; i < size.length; i++){
    size[i] += 50;
}
console.log('MONTH 1 \nOne month has, passed, my sheeps have grown, here are their sizes:')
console.log(...size);





// 8.5: Let’s do this for 4 months (or as long as you want)
let month = 4;
for(let a = 0; a <= month; a++){
    for(let i = 0; i < size.length; i++){
        size[i] += 50;
    }
    console.log(`MONTH ${a} \nOne month has, passed, my sheeps have grown, here are their sizes:`);
    console.log(...size);

    let max2 = Math.max(...size);
    console.log(`Now my biggest sheep has size ${max}, let's shave it`);

    indexM2 = size.indexOf(max2);
    size[indexM2] = 8;
    console.log('After shearing, here is my flock:');
    console.log(...size);

}






// 8.6: After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
let sum = 0;
for(let i = 0; i < size.length; i++){
    sum += size[i];
} 
console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum}*2$ = ${sum*2}`);


