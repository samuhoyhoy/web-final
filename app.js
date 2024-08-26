window.addEventListener('load', function() {
    const loader = document.getElementById('loading__screen');
    const Navbar = document.getElementById('navbar');

    loader.classList.add('fade-out');

    loader.addEventListener('transitionend', function() {
        loader.style.display = 'none';
        Navbar.style.display = 'flex'; 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.shop__menu'); 
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');

    scrollLeftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -window.innerWidth, 
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => { 
        container.scrollBy({
            left: window.innerWidth, 
            behavior: 'smooth'
        });
    });
});

let popup = document.getElementById("popup");

function openPopup(popupId) {
    document.getElementById(popupId).classList.add("open-popup");
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.remove("open-popup");
}

function showThankYouMessage() {
    closePopup('popup1','popup2','popup3','popup4');

    var thankYouPopup = document.createElement('div');
    thankYouPopup.className = 'popup open-popup';
    thankYouPopup.innerHTML = `
        <h2>Thank You!</h2>
        <p>Thank you for your purchase. We appreciate your business!</p>
        <button type="button" class="btn" onclick="closeThankYouMessage()">Close</button>
    `;

    document.body.appendChild(thankYouPopup);
}

function closeThankYouMessage() {
    var popup = document.querySelector('.popup.open-popup');
    popup.classList.remove('open-popup');
}