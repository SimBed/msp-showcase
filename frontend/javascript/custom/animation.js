const images = document.getElementsByClassName('canvas-image');
// const texts = document.getElementsByClassName('canvas-text');
// images[0].getElementsByTagName("img")[0].classList.add("show");

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

// const textAnimate = (entries, observer) => {
//   for (const entry of entries) {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//       entry.target.remove("hidden");

//     } else {
//       console.log('text intersect');
//       entry.target.classList.add("hidden");
//       entry.target.classList.remove("show");
//     }
//   }
// };

const objOptions = {
  root: null,
  threshold: 0.5
};

const imageObserver = new IntersectionObserver(imageAnimate, objOptions);
for (const image of images) {
  imageObserver.observe(image);
}

// const textObserver = new IntersectionObserver(textAnimate, objOptions);
// for (const text of texts) {
//   textObserver.observe(text);
// }