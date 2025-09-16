const burger = document.getElementById('header__burger');
const nav = document.getElementById('header__nav');

burger.addEventListener('click', () => {
    console.log('click');
    console.log(nav.style.display);
    if(nav.style.display === 'none') {
        nav.style.display = 'block';
        console.log(1)
    }else {
        nav.style.display = 'block';
        console.log(2)
    }
})