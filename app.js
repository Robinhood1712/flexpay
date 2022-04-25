let toggleBtn;
let bigWrapper;
let hamburgerMenu;
let button;
let closeBtn;

function declare (){
    toggleBtn = document.querySelector('.toggle-btn')
    bigWrapper = document.querySelector('.big-wrapper');
    hamburgerMenu = document.querySelector('.hamburger-menu img');
    button = document.querySelector('.toggle-btn');
    closeBtn = document.querySelector('.close-modal');

}

const main = document.querySelector('main');

declare();

let dark = false;

function toggleAnimation(){

    dark = !dark;

    const clone = bigWrapper.cloneNode(true);
    if (dark === true){
        clone.classList.add('dark');
        clone.classList.remove('light');
     } else {
        clone.classList.remove('dark');
        clone.classList.add('light');
        
    }
    clone.classList.add('copy');
    main.appendChild(clone);


    clone.addEventListener('animationend', () => {
        bigWrapper.remove();
        clone.classList.remove('copy');
        declare();
        addListener();
    })
}

function addListener(){
    toggleBtn.addEventListener('click', toggleAnimation);
    closeBtn.addEventListener('click', () => {
        bigWrapper.classList.toggle('active')
        closeBtn.classList.remove('show');
        hamburgerMenu.classList.remove('close');
    })
    hamburgerMenu.addEventListener('click', () => {
        bigWrapper.classList.toggle('active')
        hamburgerMenu.classList.add('close');

        hamburgerMenu.classList.add('close');
         closeBtn.classList.add('show');
    })
}


addListener();

