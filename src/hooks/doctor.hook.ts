import { applyAsDoctor, getAllDoctors, verifyDoctorApplyOTP } from "@/api";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

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


export const useSuspenseGetAllDoctors = () => {
  return useSuspenseQuery({
    queryKey: ["doctors"],
    queryFn: getAllDoctors,
  });
};

//? normal
// export const useGetAllDoctors = () => {
//   return useQuery({
//     queryKey: ["doctors"],
//     queryFn: getAllDoctors,
//   });
// };
