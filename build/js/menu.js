var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 200,
  'tolerance': 70
});

// Toggle button
document.querySelector('.navbar-toggle').addEventListener('click', function() {
  slideout.toggle();
});
    