"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import {
  setEmail as setStoredEmail,
  getEmail,
  setToken,
  removeToken,
  isAuthenticated as checkAuth,
  setExpiredAt,
  setRefreshToken,
} from "@/lib/auth";
import { gooeyToast } from "@/components/ui/goey-toaster";
import { VerifyOtpResponse } from "@/lib/types";

/**
 * Custom hook to manage authentication state, login, OTP verification, and resending.
 */
export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);

  // Sync email from storage if local state is empty (e.g., on page refresh)
  useEffect(() => {
    const storedEmail = getEmail();
    if (storedEmail && !email) {
      setEmail(storedEmail);
    }
  }, [email]);

  // Countdown timer for resending OTP
  useEffect(() => {
    if (timer <= 0) return;
    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  /**
   * Handles the initial login request.
   */
  const handleLogin = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      setLoading(true);

      try {
        const response = await apiClient.post<string>(
          "/rest/auth/signInWithEmailAndPassword",
          { email, password },
        );

        if (response.meta.code === 200) {
          setStoredEmail(email);
          router.push("/verify-otp");
          return true;
        } else {
          gooeyToast.error(response.meta.message || "Login failed");
          return false;
        }
      } catch (err) {
        gooeyToast.error("An unexpected error occurred. Please try again.");
        console.error(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [email, password, router],
  );

  /**
   * Verifies the OTP code.
   */
  const verifyOtp = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (otp.length !== 6) return false;

      setVerifying(true);
      const currentEmail = email || getEmail() || "";

      try {
        const response = await apiClient.post<VerifyOtpResponse>(
          "/rest/auth/verifyOtpSignIn",
          {
            email: currentEmail,
            otp,
          },
        );

        if (response.meta.code === 200 && response.data?.token) {
          setToken(response.data.token);
          setRefreshToken(response.data.refreshToken);
          setExpiredAt(response.data.expiredAt);
          router.push("/dashboard");
          return true;
        } else {
          gooeyToast.error(response.meta.message || "Verification failed");
          return false;
        }
      } catch (err) {
        gooeyToast.error("An unexpected error occurred. Please try again.");
        console.error(err);
        return false;
      } finally {
        setVerifying(false);
      }
    },
    [email, otp, router],
  );

  /**
   * Resends the OTP verification code.
   */
  const resendOtp = useCallback(async () => {
    if (timer > 0 || resending) return false;

    setResending(true);
    const currentEmail = email || getEmail() || "";

    try {
      const response = await apiClient.post<any>("/rest/auth/resendOtpSignIn", {
        email: currentEmail,
      });

      if (response.meta.code === 200) {
        setTimer(59);
        gooeyToast.success("Verification code resent");
        return true;
      } else {
        gooeyToast.error(response.meta.message || "Failed to resend code");
        return false;
      }
    } catch (err) {
      gooeyToast.error("An unexpected error occurred. Please try again.");
      console.error(err);
      return false;
    } finally {
      setResending(false);
    }
  }, [email, timer, resending]);

  /**
   * Clears session data and redirects to login.
   */
  const logout = useCallback(() => {
    removeToken();
    router.push("/login");
  }, [router]);

  return {
    // State
    email,
    setEmail,
    password,
    setPassword,
    otp,
    setOtp,
    timer,
    loading,
    verifying,
    resending,

    // Actions
    handleLogin,
    verifyOtp,
    resendOtp,
    logout,

    // Status
    isAuthenticated: checkAuth(),
  };
}
