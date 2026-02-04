
import { QueryClient } from "react-query";

import { apiBaseUrl } from "./constants";
import { defaultQueryFn } from "./defaultQueryFn";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { refreshAccessTokenFn } from "./api";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: async (e) => {
        try {
          const err = JSON.parse(e.message);
          if (err.status === 401 || err.code2 === 401) {
            await refreshAccessTokenFn();
          }
        } catch (error) {
          // Message might not be JSON
        }
      },
    },
    queries: {
      retry: async (count, e) => {
        try {
          const err = JSON.parse(e.message);
          if (err.status === 401 || err.code2 === 401) {
            await refreshAccessTokenFn();
            return count < 3;
          }
        } catch (error) {
          // Message might not be JSON
        }
        return false;
      },
      staleTime: 60 * 1000 * 1, // 5 minutes
      onError: (e) => {
        console.log(e);
      },
      queryFn: defaultQueryFn,
    },
  },
});