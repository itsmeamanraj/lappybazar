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

// function setupCarousel(leftId, rightId, containerId) {
//   const container = document.getElementById(containerId);
//   const scrollAmount = 300;

//   document.getElementById(leftId).addEventListener('click', () => {
//     container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//   });

//   document.getElementById(rightId).addEventListener('click', () => {
//     container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   });
// }

// // Call this for each section
// setupCarousel('scrollLeft', 'scrollRight', 'carouselContainer');
// setupCarousel('scrollLeft1', 'scrollRight1', 'carouselContainer1');
// setupCarousel('scrollLeft2', 'scrollRight2', 'carouselContainer2');
// setupCarousel('scrollLeft3', 'scrollRight3', 'carouselContainer3');
// setupCarousel('scrollLeft4', 'scrollRight4', 'carouselContainer4');


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



  // const scrollamount = 100; // Adjust based on thumbnail size
  // const containers = document.getElementById('thumbnailContainer');
  // const leftBtn = document.getElementById('thumbLeft');
  // const rightBtn = document.getElementById('thumbRight');

  // leftBtn.addEventListener('click', () => {
  //   containers.scrollBy({ left: -scrollamount, behavior: 'smooth' });
  // });

  // rightBtn.addEventListener('click', () => {
  //   containers.scrollBy({ left: scrollamount, behavior: 'smooth' });
  // });

  window.addEventListener("DOMContentLoaded", () => {
  // Generic carousel setup
  function setupCarousel(leftId, rightId, containerId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftId);
    const rightBtn = document.getElementById(rightId);
    const scrollAmount = 300;

    if (leftBtn && rightBtn && container) {
      leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });

      rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  }

  // Call setup for multiple carousels
  setupCarousel('scrollLeft', 'scrollRight', 'carouselContainer');
  setupCarousel('scrollLeft1', 'scrollRight1', 'carouselContainer1');
  setupCarousel('scrollLeft2', 'scrollRight2', 'carouselContainer2');
  setupCarousel('scrollLeft3', 'scrollRight3', 'carouselContainer3');
  setupCarousel('scrollLeft4', 'scrollRight4', 'carouselContainer4');
//  setupCarousel('scrollLeft5', 'scrollRight5', 'carouselContainer5');

});


window.addEventListener("DOMContentLoaded", () => {
  const scrollAmount = 100; // Scroll one thumbnail width at a time
  const container = document.getElementById("carouselContainer5");
  const leftBtn = document.getElementById("scrollLeft5");
  const rightBtn = document.getElementById("scrollRight5");

  if (container && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Thumbnail click sets main image
    const thumbnails = container.querySelectorAll("img");
    const mainImage = document.getElementById("mainProductImage");

    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        if (mainImage) {
          mainImage.src = thumb.src;
        }
      });
    });
  }
});
