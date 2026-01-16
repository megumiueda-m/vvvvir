// ハンバーガーメニュー
const button = document.querySelector('.hamburger');
const nav = document.querySelector('.hamburger_nav');
const anchors = document.querySelectorAll('.hamburger_nav a');

if (button && nav) {
  button.addEventListener('click', () => {
    button.classList.toggle('open');
    nav.classList.toggle('open');
  });

  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      button.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}