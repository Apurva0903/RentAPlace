import axios from "axios";
import { apiBaseUrl } from "./constants";
export const accessTokenKey = "access";
export const refreshTokenKey = "refresh";

export const api = axios.create({
  baseURL: apiBaseUrl,
});
api.defaults.headers.common["Content-Type"] = "application/json";

// Add request interceptor to dynamically add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(accessTokenKey);
    if (token && token !== 'null' && token !== 'undefined') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const refreshAccessTokenFn = async () => {
  const refreshToken = localStorage.getItem(refreshTokenKey);
  if (!refreshToken || refreshToken === 'null' || refreshToken === 'undefined') {
    localStorage.clear();
    window.location.href = "/";
    return;
  }

  try {
    const res = await fetch(`${apiBaseUrl}token/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const { accessToken } = data;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem(accessTokenKey, accessToken);
      return accessToken;
    } else {
      // Refresh token failed (e.g., 401)
      localStorage.removeItem(accessTokenKey);
      localStorage.removeItem(refreshTokenKey);
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Token refresh failed", error);
    localStorage.clear();
    window.location.href = "/";
  }
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const registerCustomer = async (data) => {
  return await api.post("auth/customer/register", data);
};

export const registerOwner = async (data) => {
  return await api.post("auth/owner/register", data);
};
