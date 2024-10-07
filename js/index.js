// Плавное перемещение
const anchors = document.querySelectorAll('[data-nav]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: ('center')
    })
  })
}








