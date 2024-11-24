// script.js
const fireEffectContainer = document.createElement('div');
document.body.appendChild(fireEffectContainer);

document.addEventListener('mousemove', (e) => {
    const fire = document.createElement('div');
    fire.classList.add('fire-effect');
    fire.style.left = `${e.pageX - 50}px`;
    fire.style.top = `${e.pageY - 50}px`;

    fireEffectContainer.appendChild(fire);

    setTimeout(() => {
        fire.remove();
    }, 1000);
});

// Sayfa aşağı kaydırıldıkça bölümler görünür olacak
const sections = document.querySelectorAll('section');

const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Sayfa yüklendiğinde hemen çalıştır
