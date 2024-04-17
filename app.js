let togler = document.querySelector('.togler');
let menu = document.querySelector('.menu');
let menuLink = document.querySelectorAll('.list__item-link')

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
        menu.classList.add('active')
        togler.classList.add('active')
    })
}

togler.addEventListener('click', () => {
    togler.classList.toggle('active')
    menu.classList.toggle('active')
});

// it's loading website

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         let loading = document.querySelector('.loading');
//         if (loading) {
//             loading.style.display = 'none';
//         }
//     }, 3000)
// });

// it's loading website