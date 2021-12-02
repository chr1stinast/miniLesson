function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('h2');
const box2 = document.querySelector('#whatIs');
document.addEventListener('scroll', function () {
    if(isInViewport(box)) {
        box.classList.add("typewriter-text");
        box.textContent = "Getting Started with jQuery"
    }
    else {
        box.classList.remove("typewriter-text");
        box.textContent = ""
    }
    if(isInViewport(box2)) {
        box2.classList.add("typewriter-text");
    }
    else {
        box2.classList.remove("typewriter-text");
    }
}, {
    passive: true
});