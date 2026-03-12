/**
 * Utility for managing JWT token in localStorage.
 */

const AUTH_TOKEN_KEY = "arta_auth_token";

/**
 * Retrieves the JWT token from localStorage.
 */
/**
 * Retrieves the JWT token from localStorage or cookies (fallback).
 */
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  
  // Try localStorage first
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) return token;

  // Fallback to cookie (useful for mid-session loads or middleware sync)
  const match = document.cookie.match(new RegExp('(^| )' + AUTH_TOKEN_KEY + '=([^;]+)'));
  return match ? match[2] : null;
};

/**
 * Sets the JWT token in both localStorage and cookies.
 */
export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    // Set cookie for middleware access (expires in 7 days, safe for production)
    document.cookie = `${AUTH_TOKEN_KEY}=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  }
};

/**
 * Removes the JWT token from both localStorage and cookies.
 */
export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    // Remove cookie
    document.cookie = `${AUTH_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};

/**
 * Checks if the user is authenticated (i.e., has a token).
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
