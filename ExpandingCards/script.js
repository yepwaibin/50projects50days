const panels = document.querySelectorAll(".panel");
const container = document.querySelector(".container");

// 遍历panel，删除active类
const removeActiveClass = () => {
  panels.forEach((panel) => panel.classList.remove("active"));
};

// 事件委托，在容器上监听事件点击，不必对每个panel设置监听
container.addEventListener("click", (event) => {
  const panel = event.target.closest(".panel");
  if (!panel) return;
  if (!container.contains(panel)) return;
  removeActiveClass();
  panel.classList.add("active");
});
