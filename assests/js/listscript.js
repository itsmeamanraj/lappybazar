document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById('bar');
  const closeBtn = document.getElementById('xmark');
  const sideMenu = document.getElementById('sideMenu');

  openBtn?.addEventListener('click', () => {
    sideMenu.classList.remove('translate-x-full');
    sideMenu.classList.add('translate-x-0');
  });

  closeBtn?.addEventListener('click', () => {
    sideMenu.classList.remove('translate-x-0');
    sideMenu.classList.add('translate-x-full');
  });
});

function setupCarousel(leftId, rightId, containerId) {
  const container = document.getElementById(containerId);
  const scrollAmount = 300;

  document.getElementById(leftId).addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.getElementById(rightId).addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// Call this for each section
setupCarousel('scrollLeft', 'scrollRight', 'carouselContainer');
setupCarousel('scrollLeft1', 'scrollRight1', 'carouselContainer1');
setupCarousel('scrollLeft2', 'scrollRight2', 'carouselContainer2');
setupCarousel('scrollLeft3', 'scrollRight3', 'carouselContainer3');
setupCarousel('scrollLeft4', 'scrollRight4', 'carouselContainer4');


    const mainHeader = document.getElementById('mainHeader');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.remove('bg-transparent');
            mainHeader.classList.add('bg-[#000]');
        } else {
            mainHeader.classList.remove('bg-[#000]');
            mainHeader.classList.add('bg-transparent');
        }
    });

