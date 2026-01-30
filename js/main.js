import { getMenu, getMenuByStatus } from "./api.js";
import { renderMenu } from "./helper.js";

const categoryButtons = document.getElementById("buttons");
const menuList = document.querySelector(".menu-container");

async function loadMenu() {
  try {
    const menuData = await getMenu();
    renderMenu(menuData);
  } catch (error) {
    console.error("Menu loading failed:", error);
  }
}

function setupCategoryFilter(menuData) {
  categoryButtons.addEventListener("change", async (e) => {
    const category = e.target.id;
    try {
      if (category === "all") {
        renderMenu(menuData);
      } else {
        const filteredData = await getMenuByStatus(category);
        renderMenu(filteredData);
      }
    } catch (error) {
      console.error("Category filtering failed:", error);
    }
  });
}

function setupMenuClick() {
  menuList.addEventListener("click", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    const id = card.dataset.id;
    window.location.href = `detail.html?id=${id}`;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadMenu();
  setupMenuClick();
});
