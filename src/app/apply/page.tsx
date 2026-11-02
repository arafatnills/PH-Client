import { ApplyDoctorForm } from "@/components/forms/ApplyDoctorForm";

export default function ApplyDoctor() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full container">
        <ApplyDoctorForm />
      </div>
    </div>
  );
}
