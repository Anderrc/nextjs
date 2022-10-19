export const fetchProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json()
  return product;
}