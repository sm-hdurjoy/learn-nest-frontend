// Function to get user token and cbid from local storage
function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
}

// Function to get user data from backend
export async function getUser() {
  const browserData = getSession(); // get user token and cbid from local storage
  // object containing options for making an HTTP request
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  // HTTP request to get user data from backend
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,
    requestOptions
  );
  // checking if the response from backend was successful
  if (!response.ok) {
    // throwing an error if the response was unsuccessful
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json(); // storing response in data variable
  return data;
}

// Function to get user orders from backend
export async function getUserOrders() {
  const browserData = getSession(); // get user token and cbid from local storage
  // object containing options for making an HTTP request
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  // make an HTTP request to get user orders from backend
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
    requestOptions
  );

  // checking if the response from backend was successful
  if (!response.ok) {
    // throwing an error if the response was unsuccessful
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json(); // storing response in data variable
  return data;
}

// function to make an HTTP request for creating new order
export async function createOrder(cartList, total, user) {
  const browserData = getSession(); // get user token and cbid from local storage
  // object containing new order details
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };

  // object containing options for making an HTTP request
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  };

  // make an HTTP request to create new order
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders`,
    requestOptions
  );

  // checking if the response from backend was successful
  if (!response.ok) {
    // throwing an error if the response was unsuccessful
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}
