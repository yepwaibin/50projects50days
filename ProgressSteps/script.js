const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentIndex = 1;
prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 1;
  }
  updata();
});

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > circles.length) {
    currentIndex = circles.length;
  }
  updata();
});

const updata = () => {
  circles.forEach((circle, index) => {
    if (index < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // 计算蓝色条宽度
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // 判断button的disabled值
  if (currentIndex === 1) {
    prev.disabled = true;
  } else if (currentIndex === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
