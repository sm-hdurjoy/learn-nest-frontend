// function to log in user with auth details and authentication
export async function login(authDetail) {
  // object containing options for making an HTTP request
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  // make an HTTP log in request to the server with the options
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestOptions
  );
  // if the response is not ok, throw an error
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json(); // store response data

  // if the response has an access token, store it in the session storage
  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

// function to register a new user
export async function register(authDetail) {
  // object containing options for making an HTTP request
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  // make an HTTP register request to the server with the options
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/register`,
    requestOptions
  );
  // if the response is not ok, throw an error
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  // if the response has an access token, store it in the session storage
  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

// function to log out user and remove the session storage
export async function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
