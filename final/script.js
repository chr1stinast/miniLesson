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
const box3 = document.querySelector('#options');
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
currentText = ["Effects", "Event Handling", "DOM Manipulation"];
currentColor= ["#f92672", "#a6e22e", "#e6db74"];
let i = 0;
box3.addEventListener('animationend', () => {
    setTimeout(function(){
        i++;
        if (i == 3) {
            i = 0;
        }
        box3.style.animationTimingFunction = "steps(currentText[i].length, end)";
        box3.style.color = currentColor[i]
        box3.classList.remove("typewriter-text");
        void box3.offsetWidth;
        box3.classList.add("typewriter-text");
        box3.textContent = currentText[i];
    }, 1000); 
});
