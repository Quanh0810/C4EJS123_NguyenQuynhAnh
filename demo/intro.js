let girl = [
    {
        surname: 'Nguyễn Đức',
        name: 'Tùng',
        img: 'tùng.jpg',
        desc: 'Đăng nhập, đăng kí'
    },
    {
        surname: 'Nguyễn',
        name: 'Quỳnh Anh',
        img: 'qa.jpg',
        desc:'Tìm kiếm api, footer và trang giới thiệu các thành viên'
    },
    {
        surname: 'Đỗ Tuấn',
        name: 'Dũng',
        img: 'dũng2.jpg',
        desc:'CRUD để tạo thông tin sản phẩm'
    },
    {
        surname: 'Ngô Ngọc',
        name: 'Tâm',
        img: 'tâm.jpg',
        desc:'Cân team :))'
    },
];
let picture = document.querySelectorAll('.effect-sarah');
picture.forEach((element, index) => {
    element.lastElementChild.firstElementChild.prepend(girl[index].surname + ' ');
    element.lastElementChild.firstElementChild.firstElementChild.innerText = girl[index].name;
    element.firstElementChild.src = girl[index].img;
    element.addEventListener('click', () => {
        Swal.fire({
            title: `<h2 class="name">${girl[index].surname} ${girl[index].name}<h2>`,
            html: 
            `<p class="desc">${girl[index].desc}</p>`
            ,
            
            padding: '1em',
            background: '#fff url(/images/trees.png)',
            
            
        
        })
    })
})