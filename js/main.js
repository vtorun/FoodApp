import { getMenu, getMenuByStatus } from "./api.js";
import { renderMenu } from "./helper.js";

window.addEventListener("DOMContentLoaded", async () => {
  const butons = document.getElementById("buttons");
  const data = await getMenu();
  renderMenu(data);
  butons.addEventListener("change", async (e) => {
    const category = e.target.id;
    if (category === "all") {
      renderMenu(data);
    } else {
      const data = await getMenuByStatus(category);
      renderMenu(data);
    }
  });

  const menuList = document.querySelector(".menu-container");
  menuList.addEventListener("click", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    const id = card.dataset.id;
    window.location.href = `detail.html?id=${id}`;
  });
});
