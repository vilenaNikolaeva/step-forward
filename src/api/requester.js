// import { BASE_URL } from './../api/constants';

// function getToken() {
//     return 'Bearer ' + sessionStorage.token;
// }

// //Function to return GET promise
// function get(endpoint) {
//     return fetch(BASE_URL + endpoint, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': getToken()
//         }
//     })
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }

// //Function to return POST promise
// function post(endpoint, data) {
//     return fetch(BASE_URL + endpoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': getToken()
//         },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }
// //Function to return PUT promise
// function put(endpoint, data) {
//     return fetch(BASE_URL + endpoint, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': getToken()
//         },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }
// //Function to return PUT FormData promise
// function putFormData(endpoint, formData) {
//     return fetch(BASE_URL + endpoint, {
//         method: 'PUT',
//         headers: {
//             'Authorization': getToken()
//         },
//         body: formData
//     })
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }

// // Function to return DELETE promise
// function remove (endpoint) {
//     return fetch(BASE_URL + endpoint, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': getToken()
//         }
//     })
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }

// let requester = {
//     get,
//     post,
//     put,
//     putFormData,
//     remove
// };

// export default requester;

import { toast } from "react-toastify";

function getToken() {
  if (sessionStorage.userData) {
    const userData = JSON.parse(sessionStorage.userData);
    return "Bearer " + userData.token;
  }
  return "Bearer " + sessionStorage.token;
}

export const request = async (url, options) => {
  try {
    if (!url || !options?.method) {
      throw new Error("Invalid input params");
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      const message = await response.json();
      toast.error(message.title);
      throw new Error(message.message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return toast.error(err);
  }
};

export const getOptions = async (method = "get", body,type) => {
  const idToken = await getToken();
  const options = {
    method,
    headers: {},
  };

  if (idToken) {
    options.headers["Authorization"] = idToken;
  }

  if (type === "formData") {
    options.body = body;
  } else {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
};
