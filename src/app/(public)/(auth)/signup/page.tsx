import { SignupForm } from "@/components/forms/RegisterForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md lg:max-w-6xl">
        <SignupForm />
      </div>
    </div>
  );
}
