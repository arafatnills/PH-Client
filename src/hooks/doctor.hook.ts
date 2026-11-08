import { applyAsDoctor, verifyDoctorApplyOTP } from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useApplyAsDoctor = () => {
  return useMutation({
    mutationFn: applyAsDoctor,
  });
};
export const useApplyAsDoctorVerifyOTP = () => {
  return useMutation({
    mutationFn: verifyDoctorApplyOTP,
  });
};