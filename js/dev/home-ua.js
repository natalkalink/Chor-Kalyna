import "./app.min.js";
import "./slider.min.js";
document.addEventListener("DOMContentLoaded", () => {
  const activeTab = document.querySelector(".topics__tab.active");
  if (activeTab) {
    const cards = activeTab.querySelectorAll(".item-topics");
    cards.forEach((card) => card.classList.remove("visible"));
    setTimeout(() => {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, i * 150);
      });
    }, 10);
  }
  document.addEventListener("click", function(e) {
    const target = e.target;
    if (target.closest(".nav-topics__item")) {
      const clickedTab = target.closest(".nav-topics__item");
      const activeTabBtn = document.querySelector(".nav-topics__item.active");
      if (clickedTab !== activeTabBtn) {
        activeTabBtn.classList.remove("active");
        clickedTab.classList.add("active");
        const tabs = document.querySelectorAll(".topics__tab");
        const activeContent = document.querySelector(".topics__tab.active");
        if (activeContent) activeContent.classList.remove("active");
        const newTabIndex = Array.from(clickedTab.parentNode.children).indexOf(clickedTab);
        const newActiveTab = tabs[newTabIndex];
        newActiveTab.classList.add("active");
        const cards = newActiveTab.querySelectorAll(".item-topics");
        cards.forEach((card) => card.classList.remove("visible"));
        setTimeout(() => {
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, i * 150);
          });
        }, 10);
      }
    }
  });
});
