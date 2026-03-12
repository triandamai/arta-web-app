"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RefreshCwIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiClient } from "@/lib/api-client";
import { getEmail, setToken } from "@/lib/auth";
import { gooeyToast } from "goey-toast";

export default function VerifyOtpContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(59);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const email = getEmail() || "m@example.com";

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length !== 6) return;

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post<{ token: string }>(
        "/rest/auth/verifyOtpSignIn",
        {
          email,
          otp: value,
        },
      );

      if (response.meta.code === 200 && response.data?.token) {
        setToken(response.data.token);
        router.push("/dashboard");
      } else {
        gooeyToast.error(response.meta.message || "Verification failed");
        setError(response.meta.message || "Verification failed");
      }
    } catch (err) {
      gooeyToast.error("An unexpected error occurred. Please try again.");
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0 || resending) return;

    setResending(true);
    setError(null);

    try {
      const response = await apiClient.post("/auth/resend-otp", { email });
      if (response.meta.code === 200) {
        setTimer(59);
      } else {
        gooeyToast.error(response.meta.message || "Failed to resend code");
        setError(response.meta.message || "Failed to resend code");
      }
    } catch (err) {
      gooeyToast.error("An unexpected error occurred. Please try again.");
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="mx-auto max-w-md w-full">
        <form onSubmit={handleVerify}>
          <CardHeader>
            <CardTitle>Verify your login</CardTitle>
            <CardDescription>
              Enter the verification code we sent to your email address:{" "}
              <span className="font-medium">{email}</span>.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                  Verification code
                </FieldLabel>
                <Button
                  variant="outline"
                  size="xs"
                  type="button"
                  onClick={handleResendOtp}
                  disabled={timer > 0 || resending}
                >
                  <RefreshCwIcon
                    className={cn("mr-2 h-4 w-4", resending && "animate-spin")}
                  />
                  {resending
                    ? "Resending..."
                    : `Resend Code ${timer > 0 ? `(${timer}s)` : ""}`}
                </Button>
              </div>
              <InputOTP
                maxLength={6}
                id="otp-verification"
                required
                value={value}
                onChange={(val) => setValue(val)}
                disabled={loading}
              >
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription>
                <a href="#" className="text-sm hover:underline">
                  I no longer have access to this email address.
                </a>
              </FieldDescription>
            </Field>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full"
              disabled={loading || value.length !== 6}
            >
              {loading ? "Verifying..." : "Verify"}
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              Having trouble signing in?{" "}
              <Link
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-primary"
              >
                Contact support
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
