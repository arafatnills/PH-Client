import apiClient from "@/lib/apiClient";
import { ApplyAsDoctorFormPayload, VerifyOTP } from "@/types";

export function applyAsDoctor(doctorData: ApplyAsDoctorFormPayload) {
  const formData = new FormData();
  formData.append("data", JSON.stringify(doctorData.data));
  formData.append("resume", doctorData.file);

  for (const file of doctorData.additionalFiles) {
    formData.append("additionalFiles", file);
  }
  return apiClient("/doctor/apply-as-doctor", {
    method: "POST",
    body: formData,
  });
}
export function verifyDoctorApplyOTP(otpData: VerifyOTP) {
  return apiClient("/doctor/apply-as-doctor/verify-email", {
    method: "POST",
    body: JSON.stringify(otpData),
  });
}


