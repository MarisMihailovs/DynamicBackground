

function fillBackground() {

    for (let i = 1; i <= 1600; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        document.querySelector('background').appendChild(box);


    }
    function animateBx() {
        const boxes = document.querySelectorAll('.box');
        let num = Math.floor(Math.random() * boxes.length);
        boxes[num].classList.toggle('green');
    }
    setInterval(animateBx, 1);
}
fillBackground();

