import { renderDetail } from "./helper.js";

window.addEventListener("DOMContentLoaded", async () => {
  const id = new URLSearchParams(window.location.search).get("id");
  await renderDetail(id);
});
