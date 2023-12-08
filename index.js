const btn = document.getElementById('button');
const nav = document.getElementById('nav-ul');

btn.addEventListener('click', function () {
    nav.classList.toggle('toggle');
});







class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 8);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // change color for data-text
        this.txtElement.innerHTML = `<span class="txt" style="color: #e2000f;">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}








// Necessary GSAP libs:
// * TweenLite.min.js
// * TimelineLite.min.js
// * AttrPlugin.min.js
// * CSSPlugin.min.js
//
// Total size is about 80kB

window.onload = function () {
    // Keep graphics fit the screen for small devices
    // mobileScale();

    // Loop timeline
    let tl = new TimelineLite({
        onComplete: function () {
            this.restart();
        }
    });

    // Open the laptop
    tl.to('.laptop-lid', 0.1, {
        fill: '#313638',
        stroke: 'none',
        ease: Linear.easeNone
    }, '+=1');
    tl.to('.laptop-lid', 0.6, {
        attr: { d: 'M 70,240 l 341.643 0 l 0 -215.73 l -341.643 0 l 0 215.73 z M 426,250 l -368.433 0 l 0 -231.663 c 0 -9.87 8.037 -18.048 18.048 -18.048 l 333.606 0 c 9.87 0 18.048 8.037 18.048 18.048 l 0 231.663 z' },
        ease: Power1.easeOut
    }, '-=0.1');

    // Switch on the screen
    tl.to(['.screen-bg', '.grid', '.logo'], 0.1, {
        opacity: 1,
        ease: Power1.easeOut
    });

    // Draw charts
    tl.to('.chart', 0.5, {
        strokeDashoffset: 0,
        ease: Power1.easeIn
    });

    // make boxes fly from the laptop center + fade in the boxs
    const delta = [
        { x: 12, y: 17 },
        { x: -15, y: 13 },
        { x: -14, y: -13 },
        { x: 21, y: 0 },
        { x: -3, y: 23 },
        { x: -21, y: 11 },
        { x: -21, y: 2 },
        { x: -20, y: 5 },
        { x: 11, y: -27 },
        { x: 24, y: -11 },
        { x: 21, y: 9 }
    ];
    const textBoxes = Array.from(document.getElementsByClassName('text-block'));
    for (idx in delta) {
        tl.fromTo(textBoxes[idx], 0.6, {
            x: delta[idx].x,
            y: delta[idx].y
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power2.easeOut
        }, 2.5);
    }

    // fade out the whole container
    tl.to('.container', 0.5, {
        opacity: 0
    }, '+=1');
};

// window.onresize = mobileScale;

// Keep graphics fit the screen for small devices
// function mobileScale() {
//     scale = Math.min(
//         // the container is (577 x 418) px initially
//         window.innerWidth / 577,
//         window.innerHeight / 418
//     );
//     if (scale < 1) {
//         TweenLite.set('.container', {
//             scale: scale,
//             transformOrigin: 'center center'
//         })
//     }
// }
















const msg = document.querySelector(".msg");
const sumbitbtn = document.getElementById("submitbtn");

msg.addEventListener("focus", submsg);

function submsg() {
    sumbitbtn.style.display = "block";
    sumbitbtn.style.animation = "slide 0.5s ease-in-out";
}
