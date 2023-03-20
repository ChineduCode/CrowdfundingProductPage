//variables for hamburger,nav-exit and nav
const hamburger = document.querySelector('.icon-hamburger');
const closeMenu = document.querySelector('.icon-close-menu');
const nav = document.querySelector('nav');
const maincontainer = document.querySelector('main')

//event listener for hamburger
hamburger.addEventListener('click', ()=>{
    nav.style.display= 'block';
    hamburger.style.display = 'none';
    closeMenu.style.display= 'unset';
    maincontainer.style.filter= 'brightness(0.85)';
});
//event listener for close menu
closeMenu.addEventListener('click', ()=>{
    nav.style.display = 'none';
    closeMenu.style.display = 'none';
    hamburger.style.display = 'unset';
    maincontainer.style.filter = 'brightness(1)'
});



//variables for mastercraft container
const mastercraftBtn = document.getElementById('mastercraft-btn');
const bookmark = document.querySelector('.bookmark-container')
const bookmarkText = document.querySelector('.bookmark-text')

//bookmark
bookmark.addEventListener('click', ()=> {
    bookmarkText.classList.toggle('bookmark')
})

//variables for modal container
const modalContainer = document.querySelector('.selection-modal');
const modalExitBtn = document.getElementById('icon-close-modal');
const radioBtns = document.querySelectorAll('#select');


//event listener for mastercraft btn
mastercraftBtn.addEventListener('click', ()=>{
    modalDisplayBlock(modalContainer)
});
//event listener for modalExitBtn
modalExitBtn.addEventListener('click', ()=>{
    modalDisplayNone(modalContainer)
});

//creating function for displaying modal container when needed
function modalDisplayBlock(container){
    container.classList.add('toggle')
    maincontainer.style.filter= 'brightness(0.85)';
    window.scrollTo(0, 0)
}

function modalDisplayNone(container){
    container.classList.remove('toggle');
    maincontainer.style.filter = 'brightness(1)'
}



//variables for stat container
const totalBacked = document.querySelector('#total-backed')
const totalBackers = document.querySelector('#total-backers')
const daysLeft = document.querySelector('#days-left')
const range = document.querySelector('#range')


//about this project section
//selecting each of the btns
const Btns = document.querySelectorAll('.btn')
Btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        modalDisplayBlock(modalContainer)
    })
})



//displaying selected pledge once radioBtn is clicked
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', ()=> {
        const selectedPledge = radioBtn.parentElement.parentElement.lastElementChild;
        
        selectedPledge.style.display= 'block';
    })
});

//pledge section
const pledgeContdBtns = document.querySelectorAll('.pledge-contd-btn')
const Pledge25 = document.querySelector('.pledge-25')
const Pledge75 = document.querySelector('.pledge-75')
const Pledge200 = document.querySelector('.pledge-200')

pledgeContdBtns.forEach(pledgeContdBtn => {
    pledgeContdBtn.addEventListener('click', ()=>{

        //total amount backed
        if(pledgeContdBtn.classList.contains('25')){
            totalBacked.innerText = (totalBacked.innerText)/1 + (Pledge25.value)/1
        }else if(pledgeContdBtn.classList.contains('75')){
            totalBacked.innerText = (totalBacked.innerText)/1 + (Pledge75.value)/1
        }else{
            totalBacked.innerText = (totalBacked.innerText)/1 + (Pledge200.value)/1
        }

        modalDisplayNone(modalContainer);

        //success modal container
        const successModal = document.querySelector('.success-modal-container')
        const successModalBtn = document.querySelector('.success-modal-btn')

        successModal.style.display= 'flex';
        maincontainer.style.filter= 'brightness(0.85)';

        successModalBtn.addEventListener('click', ()=>{
            modalDisplayNone(successModal);
            successModal.style.display= 'none';
        })


        //Total backers
        let count = 0
        count++
        totalBackers.innerText = (totalBackers.innerText)/1 + count;
    })
});