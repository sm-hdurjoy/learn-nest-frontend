// function to get product list from db
export async function getProductList(searchTerm) {
  //HTTP request to get product data from bd
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  // if the response is not ok, throw an error
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json(); // store the response data
  return data;
}

// function to get product from db by ID
export async function getProduct(id) {
  // HTTP request to get product data from db by ID
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products/${id}`
  );
  // if the response is not ok, throw an error
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json(); // store response data
  return data;
}

// function to get featured product list from db
export async function getFeaturedList() {
  // HTTP request to get featured product data from db
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );
  // if the response is not ok, throw an error
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}
