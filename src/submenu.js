function toggleReportsSubMenu() {
  const subMenu = document.getElementById('reportsSubMenu');
  const toggleIcon = document.getElementById('reportsToggleIcon');
  
  subMenu.classList.toggle('hidden');
  toggleIcon.classList.toggle('fa-angle-down', !subMenu.classList.contains('hidden'));
  toggleIcon.classList.toggle('fa-angle-up', subMenu.classList.contains('hidden'));
}

function toggleProductsSubMenu() {
  const subMenu = document.getElementById('productsSubMenu');
  const toggleIcon = document.getElementById('productsToggleIcon');
  
  subMenu.classList.toggle('hidden');
  toggleIcon.classList.toggle('fa-angle-down', !subMenu.classList.contains('hidden'));
  toggleIcon.classList.toggle('fa-angle-up', subMenu.classList.contains('hidden'));
}