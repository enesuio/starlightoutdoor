import { fetchProductBySlug, API_URL } from "./api.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let productSwiper;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await renderProductPage();
    initSwiper();
  } catch (error) {
    console.error("Error initializing product page:", error);
    alert("Failed to load product. Please try again later.");
  }
});

async function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  if (!slug) throw new Error("Product not found");

  const product = await fetchProductBySlug(slug);
  if (!product) throw new Error("Product not found");

  // Update product details
  document.getElementById("product-name").textContent = product.name;
  document.getElementById(
    "product-price"
  ).textContent = `$${product.price.toFixed(2)}`;
  document.getElementById("product-description").innerHTML =
    product.description;
  document.getElementById("product-dimensions").textContent =
    product.dimensions;
  document.getElementById("product-materials").textContent = product.materials;

  // Update product images
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";

  if (product.images?.length > 0) {
    product.images.forEach((image) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      const img = document.createElement("img");
      img.src = `${API_URL}/assets/${image.directus_files_id}`;
      img.alt = image.title || product.name || "Product Image";
      img.loading = "lazy";

      slide.appendChild(img);
      swiperWrapper.appendChild(slide);
    });
  } else {
    // Fallback if no images
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.textContent = "No images available";
    swiperWrapper.appendChild(slide);
  }
}

function initSwiper() {
  productSwiper = new Swiper("#product-image-wrapper", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  });
}

// Product Collapsible

const productDropdown = document.querySelectorAll(".product-dropdown-title");
productDropdown.forEach((dropdown) =>
  dropdown.addEventListener("click", () => toggleDropdown(dropdown))
);

function toggleDropdown(dropdown) {
  const icon = dropdown.firstElementChild;
  const content = dropdown.nextElementSibling;

  content.classList.toggle("active");

  const isRotated = icon.style.transform === "rotate(180deg)";
  icon.style.transform = isRotated ? "rotate(0deg)" : "rotate(180deg)";
}
