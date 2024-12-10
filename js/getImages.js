const d = document;

export default function getImages() {
  let id = 1;
  const $sliderContainer = d.querySelector(".slider-slides");
  for (let i = 0; i < 250; i++) {
    id = i + 1;
    let url = `https://picsum.photos/id/${id}/1200/400`;
    let $slider = d.createElement("div");
    let $img = d.createElement("img");

    $slider.classList.add("slider-slide");
    if (i === 0) {
      $slider.classList.add("active");
    }
    $img.setAttribute("src", url);
    $slider.append($img);
    $sliderContainer.append($slider);
  }
}
