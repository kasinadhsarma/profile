for (let i = 0; i < 200; i++) { // 200 stars
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(star);
}