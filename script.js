function handleClick(e) {
    e.stopPropagation();
    let dropup = e.currentTarget;
    document.getElementById("dropup-content").classList.toggle("show");
    document.addEventListener('click', () => handleOutsideClick(dropup), {once: true});
}

function handleOutsideClick(dropup) {
    if (event.target !== dropup) {
        document.getElementById("dropup-content").classList.toggle("show");
    }
}

document.querySelector('.dropup').addEventListener('click', handleClick)