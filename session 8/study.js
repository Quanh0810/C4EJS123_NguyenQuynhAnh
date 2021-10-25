// 1. insertAdjacentHTML first parameter is the position where you put the new HTML into the container

// Read this documentation, then read the following code
// 1.d
// 2.a
// 3.c
// 4.b



// 2.Instead of using setTimeOut to create a timer, we can use setInterval for shorter code
setInterval(function(){
    console.log('Heehaw');
}, 2000);



// 3.Read about function scope in this link then answer the following question

// 3.1 Can a variable declared by let, in a function still exists after the function finishes running?
// "let" won't exist after the function finish running

// 3.2 Can var variable declared by var, in a function still exists after the function finishes running?
// "var" still exist after the function finish running




// 4. Use getElementsByTagName function to get ALL of the <li> tag. Print/log out the first element (which is <li>Articles</li>) and then use for loop to print ALL of the DOM you get from the function.
let x = document.getElementsByTagName('li');
for(let i = 0; i < x.length; i++){
    console.log(x[i]);
}

 


// 5. Use getElementsByTagName function to get ALL of the <div> tag. Print/log out the second element (which is <div class=”singer”>Nate Ruess</div>) and then use for loop to print ALL of the DOM you get from the function.
let x = document.getElementsByClassName('singer');

console.log(x);
for(let i = 0; i < x.length; i++){
    console.log(x[i]);
}




// 6. Learn how to remove (Delete) an HTMLElement using HTMLElement.remove() function, refer to this
let d = document.getElementsByClassName('singer');
d.addEventListener('click', () => {
    d.remove();
})



// 7.1 Catch ‘click’ event from 2 different buttons, id=”button1” and id=”button2”, in the callback body of the 2 events, print, or log out e.target. What is it?
let a = document.getElementById('button1');
a.addEventListener('click', (e)=>{
    console.log(e.target);
});

let b = document.getElementById('button2');
b.addEventListener('click', (e)=>{
    console.log(e.target)
});


It is <button id="button1"> Click </button> and <button id="button2"> Click </button>


// 7.2 Catch a ‘keydown’ event from an input, in the callback body of the event, print / log out the e.key. What is it?
let c = document.addEventListener('keydown', (g)=>{
    console.log(g.key);
})

It's button1 and button2



