const images = document.getElementsByClassName('canvas-image');
const texts = document.getElementsByClassName('canvas-text');

const imageAnimate = (entries, observer) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.getElementsByTagName("img")[0].classList.add("show");
      entry.target.getElementsByTagName("img")[0].classList.remove("hidden");

    } else {
      entry.target.getElementsByTagName("img")[0].classList.add("hidden");
      entry.target.getElementsByTagName("img")[0].classList.remove("show");
    }
  }
};

const textAnimate = (entries, observer) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("canvas-embossed");
    } else {
      entry.target.classList.remove("canvas-embossed");
    }
  }
};

const objOptions = {
  root: null,
  threshold: 0.5
};

const imageObserver = new IntersectionObserver(imageAnimate, objOptions);
for (const image of images) {
  imageObserver.observe(image);
}

const textObserver = new IntersectionObserver(textAnimate, objOptions);
for (const text of texts) {
  textObserver.observe(text);
}