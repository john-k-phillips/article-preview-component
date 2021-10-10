const activeElement = document.querySelector('.active');
const shareBtn = document.querySelector('.share')
const closeBtn = document.querySelector('.close');


shareBtn.addEventListener('click', () => {
    if (activeElement.style.display == 'flex') {
        activeElement.style.display = 'none';
    } else {
        activeElement.style.display = 'flex';
    }
})

closeBtn.addEventListener('click', () => {
    activeElement.style.display = 'none';
})