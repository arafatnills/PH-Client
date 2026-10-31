"use client";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { SignupFormValues, SignupZodSchema } from "@/validation/AuthValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GoogleLoginComponent from "../shared/google-login/GoogleLoginComponent";
import { Card, CardContent } from "../ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(SignupZodSchema),
    mode: "onTouched",
  });
  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
  };
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="overflow-hidden p-0 mt-30 md:mt0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your PH Health Care account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  required
                  className="h-11"
                  {...register('name')}
                />
                {
                  errors && <p className="text-red-500">{errors.name?.message}</p>
                }
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Full Name"
                  required
                  className="h-11"
                  {...register('email')}
                />
                {
                  errors && <p className="text-red-500">{errors.email?.message}</p>
                }
              </Field>
              <Field>
                <FieldLabel htmlFor="ph">Phone</FieldLabel>

                <Input
                  id="ph"
                  type="text"
                  placeholder="Enter Your Full Name"
                  required
                  className="h-11"
                  {...register('patient.contactNumber')}
                />
                {
                  errors && <p className="text-red-500">{errors.patient?.contactNumber?.message}</p>
                }
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="h-11 pr-10"
                    placeholder="Enter Your Password"
                    autoComplete="off"
                    {...register("password")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                  </button>
                </div>
                {
                  errors && <p className="text-red-500">{errors.password?.message}</p>
                }
              </Field>
              <Field>
                <FieldLabel htmlFor="cPassword">Confirm Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="cPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    className="h-11 pr-10"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    {...register("confirmPassword")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                  </button>
                </div>
                {
                  errors && <p className="text-red-500">{errors.confirmPassword?.message}</p>
                }
              </Field>
              <Field className="">
                <Button type="submit" className="h-11">
                  Signup
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field className="flex gap-4">
                {/* google login button  */}
                <GoogleLoginComponent />
              </Field>
              <FieldDescription className="text-center">
                Already have an account? <Link href="/login">Login</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/login.jpg"
              alt="Image"
              fill
              loading="eager"
              sizes="(min-width: 768px) 50vw, 0px"
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
