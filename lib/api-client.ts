/**
 * Simple HTTP client wrapper around the native fetch API.
 * Provides a centralized way to handle API calls with basic error handling and JSON parsing.
 */

import { getToken } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const isJson = response.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message = (data && typeof data === 'object' && data.message) 
      ? data.message 
      : (typeof data === 'string' ? data : response.statusText);
    throw new ApiError(message, response.status, data);
  }

  return data as T;
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
  get: async <T>(path: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "GET",
      headers: getHeaders(options?.headers),
      ...options,
    });
    return handleResponse<T>(response);
  },

  post: async <T>(path: string, data?: any, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: getHeaders(options?.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return handleResponse<T>(response);
  },

  put: async <T>(path: string, data?: any, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "PUT",
      headers: getHeaders(options?.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return handleResponse<T>(response);
  },

  patch: async <T>(path: string, data?: any, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "PATCH",
      headers: getHeaders(options?.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return handleResponse<T>(response);
  },

  delete: async <T>(path: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "DELETE",
      headers: getHeaders(options?.headers),
      ...options,
    });
    return handleResponse<T>(response);
  },
};
