"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

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
import { REGEXP_ONLY_DIGITS } from "input-otp";

function OTPFormContent({ className, ...props }: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { email, otp });
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
                Verify Account
              </Button>
            </form>

            <div className="text-sm text-muted-foreground">
              Didn't receive the code?{" "}
              <button
                type="button"
                className="underline underline-offset-4 hover:text-primary font-medium"
              >
                Resend OTP
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
