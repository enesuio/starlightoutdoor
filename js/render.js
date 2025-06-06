const API_URL = "http://ec2-3-16-128-70.us-east-2.compute.amazonaws.com";

export function renderProductCard(product) {
  return `
    <div class="product-card">
      <a href="product.html?id=${product.slug}">
        <img src="${API_URL}/assets/${product.images?.[0]}" alt="${product.name}" />
        <h2>${product.name}</h2>
      </a>
    </div>
  `;
}

export function renderProductDetail(product) {
  return `
    <h1>${product.name}</h1>
    ${
      product.images?.[0]
        ? `<img src="${API_URL}/assets/${product.images[0]}" alt="${product.name}" />`
        : ""
    }
    <p>${product.description}</p>
  `;
}
