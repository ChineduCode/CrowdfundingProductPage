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
    modalDisplay(modalContainer)
});
//event listener for modalExitBtn
modalExitBtn.addEventListener('click', ()=>{
    modalDisplayNone(modalContainer)
});

//creating function for displaying modal container when needed
function modalDisplay(container){
    container.classList.add('active-modal')
    maincontainer.style.filter= 'brightness(0.85)';
    window.scrollTo(0, 0)
}

function modalDisplayNone(container){
    container.classList.remove('active-modal');
    maincontainer.style.filter = 'brightness(1)'
}



//variables for stat container
const totalBackedInnerText = document.querySelector('#total-backed')
const totalBackersInnerText = document.querySelector('#total-backers')
const daysLeft = document.querySelector('#days-left')

let totalBacked = 89914
let totalBackers = 5007


//about this project section
//selecting each of the btns
const Btns = document.querySelectorAll('.btn')
Btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        modalDisplay(modalContainer)
    })
})

//for days display and its range percentage
const countdownDays = setInterval(() => {
    const  now = new Date().getTime()
    const targetDate = new Date('2023-12-31T23:59:59').getTime()
    const startDate = new Date('2023-03-01T00:00:00').getTime()
    const totalTime = targetDate - startDate
    const timeRemaining = targetDate - now
    
    const totaldays = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    daysLeft.innerText = days
    
    if(days < 10){
        daysLeft.innerText = '0'+ days;
    }
    
    const daysPassed = totaldays - days //days passed
    const daysPer = Math.floor((daysPassed/totaldays) * 100); //percentage of the day passed from the total days

    if(days < 0){
        clearInterval(countdownDays)
        daysLeft.innerText = 'EXPIRED'
    }
    
    document.querySelector('.progress').style.width = `${daysPer}%` 

}, 1000);

//displaying selected pledge once radioBtn is clicked
radioBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        const selectedPledge = btn.parentElement.parentElement.lastElementChild;
        selectedPledge.classList.toggle('active-selected-pledge')
        btn.classList.toggle('active')
    })
});

//pledge section
const pledgeContdBtns = document.querySelectorAll('.pledge-contd-btn')
const Pledge25 = document.querySelector('.pledge-25')
const Pledge75 = document.querySelector('.pledge-75')
const Pledge200 = document.querySelector('.pledge-200')

let count = 0
pledgeContdBtns.forEach(pledgeContdBtn => {
    pledgeContdBtn.addEventListener('click', ()=>{

        //total amount backed
        if(pledgeContdBtn.classList.contains('25')){
            
            if(Pledge25.value == '' || Pledge25.value < 25){
                return
            }else{
                totalBackedInnerText.innerText = totalBacked + parseFloat(Pledge25.value)
            }

        }else if(pledgeContdBtn.classList.contains('75')){

            if(Pledge75.value == '' || Pledge75.value < 75){
                return
            }else{
                totalBackedInnerText.innerText = totalBacked + parseFloat(Pledge75.value)
            }

        }else{

            if(Pledge200.value == '' || Pledge200.value < 200){
                return
            }else{
                totalBackedInnerText.innerText = totalBacked + parseFloat(Pledge200.value)
            }

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
        count++
        totalBackersInnerText.innerText = totalBackers + count;
    })
});