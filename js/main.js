import { fetchAllProducts, fetchProductBySlug } from "./api.js";
import { renderProductCard, renderProductDetail } from "./render.js";

const isProductPage = window.location.pathname.includes("product.html");

if (isProductPage) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (slug) {
    fetchProductBySlug(slug).then((product) => {
      document.getElementById("product-detail").innerHTML =
        renderProductDetail(product);
    });
  } else {
    document.getElementById("product-detail").innerHTML = "Product not found.";
  }
} else {
  fetchAllProducts().then((products) => {
    const container = document.getElementById("product-list");
    container.innerHTML = products.map(renderProductCard).join("");
  });
}
