"use client";

import React from "react";
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
import { useAuth } from "@/hooks/use-auth";

export default function VerifyOtpContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    email,
    otp,
    setOtp,
    timer,
    verifying,
    resending,
    verifyOtp,
    resendOtp,
  } = useAuth();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="mx-auto max-w-md w-full">
        <form onSubmit={verifyOtp}>
          <CardHeader>
            <CardTitle>Verify your login</CardTitle>
            <CardDescription>
              Enter the verification code we sent to your email address:{" "}
              <span className="font-medium">{email || "your email"}</span>.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                  Verification code
                </FieldLabel>
                <Button
                  variant="outline"
                  size="xs"
                  type="button"
                  onClick={resendOtp}
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
                value={otp}
                onChange={(val) => setOtp(val)}
                disabled={verifying}
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
              disabled={verifying || otp.length !== 6}
            >
              {verifying ? "Verifying..." : "Verify"}
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
