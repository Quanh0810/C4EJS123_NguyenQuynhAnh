// Cau 1:
async function fetchApi(){
    const api = await fetch('https://tobitheme.net/api/characters.json');
    return await api.json();
}

fetchApi().then(api => {
            let name = document.getElementsByClassName('character__name');
            console.log(name[0]);
            console.log(api)
            let house = document.getElementsByClassName('character__house');
            let image = document.getElementById('character_img');
            for (let i = 0; i < api['data'].length;i++){
                name[i].textContent = `${api['data'][i].name}`
                house[i].textContent = `House: ${api['data'][i].house}`
                image[i].textContent = api['data'][i].image;
            }
            
        }
    )



    