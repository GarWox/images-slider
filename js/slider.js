const d = document;

export default function slider() {
  const $prevBtn = d.querySelector(".prev"),
    $nextBtn = d.querySelector(".next"),
    $sliders = d.querySelectorAll(".slider-slide");

  let interval;

  const startInterval = () => {
    interval = setInterval(() => {
      $sliders[i].classList.remove("active");
      i++;
      if (i > $sliders.length - 1) i = 0;
      $sliders[i].classList.add("active");
    }, 5000);
  };

  const resetInterval = () => {
    clearInterval(interval);
    startInterval();
  };

  startInterval();
  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i--;
      if (i < 0) i = $sliders.length - 1;
      $sliders[i].classList.add("active");
      resetInterval();
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i++;
      if (i > $sliders.length - 1) i = 0;
      $sliders[i].classList.add("active");
      resetInterval();
    }
  });
}
