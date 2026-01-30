export const getMenu = async () => {
  const response = await fetch("../db.json");
  const menus = await response.json();
  return menus.menu;
};

export const getMenuById = async (id) => {
  const menu = await getMenu();
  return menu.find((item) => item.id == id) || null;
};

export const getMenuByStatus = async (category) => {
  const menu = await getMenu();
  const menuStatus = menu.filter((data) => data.category === category);
  return menuStatus;
};
