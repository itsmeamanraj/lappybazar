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