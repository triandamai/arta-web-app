/**
 * Utility for managing JWT token in localStorage.
 */

export const AUTH_TOKEN_KEY = "fcbd_3afd_6e9c";
export const AUTH_EMAIL_KEY = "eb4d_2a1c_9f8d";

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
  const match = document.cookie.match(
    new RegExp("(^| )" + AUTH_TOKEN_KEY + "=([^;]+)"),
  );
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
    localStorage.removeItem(AUTH_EMAIL_KEY);
  }
};

/**
 * Retrieves the email from localStorage.
 */
export const getEmail = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_EMAIL_KEY);
};

/**
 * Sets the email in localStorage.
 */
export const setEmail = (email: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_EMAIL_KEY, email);
  }
};

/**
 * Checks if the user is authenticated (i.e., has a token).
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
