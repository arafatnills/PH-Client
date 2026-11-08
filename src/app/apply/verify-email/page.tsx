import { OTPForm } from "@/components/forms/OTPForm";

const VerifyDoctorOTP = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full container max-w-4xl">
        <OTPForm mode="DOCTOR" />
      </div>
    </div>
  );
};

export default VerifyDoctorOTP;
