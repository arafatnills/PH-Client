import { OTPForm } from "@/components/forms/OTPForm";

const VerifyAccountPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <OTPForm />
      </div>
    </div>
  );
};

export default VerifyAccountPage;
