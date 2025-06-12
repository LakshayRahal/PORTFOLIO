const glowGrid = document.querySelector('.background-grid.glow');

document.addEventListener('mousemove', (e) => {
  const x = `${e.clientX}px`;
  const y = `${e.clientY}px`;
  glowGrid.style.setProperty('--x', x);
  glowGrid.style.setProperty('--y', y);
});


  const videos = document.querySelectorAll('.video video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; 
    });
  });


  document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out!");
});

