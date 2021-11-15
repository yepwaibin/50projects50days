const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  // window.innerHeight 为屏幕高度
  const triggerBottom = window.innerHeight;
  boxes.forEach((box) => {
    // box.getBoundingClientRect().bottom为box的底部到屏幕上方的距离
    const boxBottom = box.getBoundingClientRect().bottom;
    if (boxBottom < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();
