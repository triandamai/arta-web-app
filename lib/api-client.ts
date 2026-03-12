/**
 * Simple HTTP client wrapper around the native fetch API.
 * Provides a centralized way to handle API calls with basic error handling and JSON parsing.
 */

import { getToken } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export type Meta = {
  code: number;
  message: string;
};

export type BaseResponse<T> = {
  type: "SUCCESS" | "FAILURE";
  data: T;
  meta: Meta;
};

export type ApiResponse<T> = {
  data: null | T;
  meta: Meta;
};

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  try {
    if (response.status >= 500) {
      return {
        data: null,
        meta: {
          code: response.status,
          message: response.statusText,
        },
      };
    } else {
      const data: BaseResponse<T> = await response.json();
      return {
        data: data.data,
        meta: data.meta,
      };
    }
  } catch (e) {
    return {
      data: null,
      meta: {
        code: 0,
        message: `${e}`,
      },
    };
  }
}

const getHeaders = (headers?: HeadersInit): HeadersInit => {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };
};

export const apiClient = {
  get: async <T>(
    path: string,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "GET",
      headers: getHeaders(options?.headers),
      ...options,
    });
    return handleResponse<T>(response);
  },

  post: async <T>(
    path: string,
    data?: object | FormData,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: getHeaders(options?.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return handleResponse<T>(response);
  },

  put: async <T>(
    path: string,
    data?: object | FormData,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "PUT",
      headers: getHeaders(options?.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return handleResponse<T>(response);
  },

  patch: async <T>(
    path: string,
    data?: object,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "PATCH",
      headers: getHeaders(options?.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return handleResponse<T>(response);
  },

  delete: async <T>(
    path: string,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "DELETE",
      headers: getHeaders(options?.headers),
      ...options,
    });
    return handleResponse<T>(response);
  },
};
