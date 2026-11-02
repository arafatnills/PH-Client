"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { useResendOTP, useVerifyOTP } from "@/hooks";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";

function OTPFormContent({ className, ...props }: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const email = searchParams.get("email")?.trim().toLowerCase() || "";
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const { mutate: resendOTP, isPending: isResending } = useResendOTP();
  const { mutate: verifyOTP, isPending } = useVerifyOTP();
  const RESEND_SECONDS = 60;
  const storageKey = `otp-resend-until:${email}`; // per-email key
  const [until, setUntil] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const secondsLeft =
    until === null ? 0 : Math.max(0, Math.ceil((until - now) / 1000));

  const startCooldown = () => {
    const end = Date.now() + RESEND_SECONDS * 1000;
    try {
      localStorage.setItem(storageKey, String(end));
    } catch {}
    setNow(Date.now());
    setUntil(end);
  };

  useEffect(() => {
    if (!email) return;
    let saved = 0;
    try {
      saved = Number(localStorage.getItem(storageKey)) || 0;
    } catch { }

    if (saved === 0) {
      startCooldown(); // first visit after signup
    } else {
      setNow(Date.now());
      setUntil(saved); // running or already expired, secondsLeft handles both
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, storageKey]);

  // Tick every second until the end time is reached
  useEffect(() => {
    if (until === null || until <= Date.now()) return;
    const id = setInterval(() => {
      const n = Date.now();
      setNow(n);
      if (n >= until) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [until]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      email,
      otp,
    };
    verifyOTP(payload, {
      onSuccess: (data) => {
        toast.success("OTP Verified", {
          description: "Your email has been successfully verified.",
        });

        router.push("/");
      },
      onError: (err) => {
        toast.error("OTP Verification Failed", {
          description: getErrorMessage(err),
        });
      },
    });
  };

  const handleResend = () => {
    if (!email || secondsLeft > 0) return;

    resendOTP(
      { email },
      {
        onSuccess: () => {
          toast.success("OTP Sent", {
            description: "A new code has been sent to your email.",
          });
          setOtp("");
          startCooldown();
        },
        onError: (err) => {
          toast.error("Failed to resend OTP", {
            description: getErrorMessage(err),
          });
        },
      },
    );
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2 min-h-100">
          <div className="flex flex-col items-center justify-center p-6 md:p-8 gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">
                Verify Your Email
              </h1>
              <p className="text-sm text-muted-foreground text-balance">
                We've sent a 6-digit code to your email address.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full max-w-[320px]"
            >
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-sm text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                  className="bg-muted/50 text-muted-foreground"
                />
              </div>

              <div className="flex flex-col gap-2 items-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  pattern={REGEXP_ONLY_DIGITS}
                >
                  <InputOTPGroup className="gap-2">
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="w-10 h-12 sm:w-12 sm:h-14 text-lg rounded-md border"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                type="submit"
                className="w-full mt-2"
                disabled={otp.length !== 6 || !email}
              >
                {isPending ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>

            <div className="text-sm text-muted-foreground">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={secondsLeft > 0 || isResending || !email}
                className="underline underline-offset-4 hover:text-primary font-medium"
              >
                {isResending
                  ? "Sending..."
                  : secondsLeft > 0
                    ? `Resend in ${secondsLeft}s`
                    : "Resend OTP"}
              </button>
            </div>
          </div>

          <div className="relative hidden bg-muted md:block">
            <Image
              src="/register.jpg"
              alt="Security Verification"
              fill
              loading="eager"
              sizes="(min-width: 768px) 50vw, 0px"
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  );
}

export function OTPForm(props: React.ComponentProps<"div">) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-100">
          Loading verification form...
        </div>
      }
    >
      <OTPFormContent {...props} />
    </Suspense>
  );
}
