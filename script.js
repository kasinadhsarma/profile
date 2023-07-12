for (let i = 0; i < 200; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(star);
}

let rockets = document.querySelectorAll('.rocket');
rockets.forEach((rocket, index) => {
    if (index % 2 === 0) {
        rocket.style.left = Math.random() * window.innerWidth + 'px';
    } else {
        rocket.style.top = Math.random() * window.innerHeight + 'px';
    }
});
