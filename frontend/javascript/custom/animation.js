const images = document.getElementsByClassName('canvas-image');
console.log(images[0]);

const imageAnimate = (entries, observer) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log('intersect');
      console.log(entry);
      entry.target.getElementsByTagName("img")[0].classList.add("show");
      entry.target.getElementsByTagName("img")[0].classList.remove("hidden");

    } else {
      entry.target.getElementsByTagName("img")[0].classList.add("hidden");
      entry.target.getElementsByTagName("img")[0].classList.remove("show");
    }
  }
};

const objOptions = {
  root: null,
  threshold: 0.5
};

const imageObserver = new IntersectionObserver(imageAnimate, objOptions);
for (const image of images) {
  console.log(image);
  imageObserver.observe(image);
}