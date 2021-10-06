import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 10000,
});

const requestHandler = (request) => {
  if (
    !request.url.includes("auth/authenticate") ||
    !request.url.includes("auth/register")
  ) {
    request.headers.Authorization = `Bearer ${localStorage.getItem("idToken")}`;
    return request;
  }
};

const responseHandler = (response) => {
  if (response.status === 401) {
    window.location = "/login";
  }
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error.response);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
