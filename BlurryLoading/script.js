const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let interval = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerHTML = `${load}%`;
  // 设置透明度
  loadText.style.opacity = (100 - load) / 100;
  // 设置模糊值
  bg.style.filter = `blur(${(100 -load) / 5}px)`;
};

