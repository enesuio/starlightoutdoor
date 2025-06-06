export const API_URL = "http://ec2-3-16-128-70.us-east-2.compute.amazonaws.com";

export async function fetchAllProducts() {
  const res = await fetch(`${API_URL}/items/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const { data } = await res.json();
  return data;
}

export async function fetchProductBySlug(slug) {
  const res = await fetch(
    `${API_URL}/items/products?filter[slug][_eq]=${slug}&fields=*,images.*`
  );
  if (!res.ok) throw new Error("Failed to fetch product");
  const { data } = await res.json();
  return data[0];
}
