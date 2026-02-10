// efek glow teks pelan
const title = document.querySelector('.hero h1');
let glow = true;

setInterval(() => {
  title.style.textShadow = glow
    ? '0 0 40px #f0abfc'
    : '0 0 15px #a855f7';
  glow = !glow;
}, 1200);
