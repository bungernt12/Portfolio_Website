const shrinkClick = event => {
    event.target.style.width  = '20%';
}

document.addEventListener('click', shrinkClick);