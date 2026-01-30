import { getMenuById } from "./api.js";

const renderMenu = (dataList) => {
  const menuList = document.querySelector(".menu-container");
  const menuListHtml = dataList
    .map(
      (data) => `<div class="menu-card" data-id="${data.id}">
            <img src="${data.image}" alt="Burger Görseli" class="menu-img">
            <div class="menu-content">
                <h3 class="menu-title">${data.name}</h3>
                <p class="menu-desc">${data.description}</p>
                <span class="menu-price">₺${data.price}</span>
            </div>
        </div> `,
    )
    .join("");
  menuList.innerHTML = menuListHtml;
};

const renderDetail = async (id) => {
  const detailContainer = document.querySelector(".detail-container");
  const product = await getMenuById(id);
  const detailHTML = `
  <div class="detail-card">
        <div class="image-wrapper">
          <img
            src="${product.image}"
            alt="Food Image"
          />
        </div>

        <div class="detail-content">
          <span class="category">${product.category}</span>

          <h1 class="detail-title">${product.name}</h1>

          <p class="detail-desc">
            ${product.description}
          </p>

          <div class="price-row">
            <span class="price">₺180</span>
          </div>
        </div>
      </div>`;
  detailContainer.innerHTML = detailHTML;
};



export { renderMenu, renderDetail };
