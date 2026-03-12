import React from "react";
import { Metadata } from "next";
import VerifyOtpContent from "./verify-otp-content";

export const metadata: Metadata = {
  title: "Verify OTP - Arta",
  description: "Secure your account with 2-step verification.",
};

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <VerifyOtpContent />
      </div>
    </div>
  );
}
