const activeElement = document.querySelector('.active');
const shareBtn = document.querySelector('.share')
const closeBtn = document.querySelector('.close');


shareBtn.addEventListener('click', () => {
    activeElement.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    activeElement.style.display = 'none';
})