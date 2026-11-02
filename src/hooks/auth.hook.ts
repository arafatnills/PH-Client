import {
  getMe,
  googleOAuth,
  resendOTP,
  userLogin,
  userLogout,
  userSignup,
  userVerifyOTP,
} from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userLogin,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
};

export const useVerifyOTP = () => {
  return useMutation({
    mutationFn: userVerifyOTP,
  });
};

export const useResendOTP = () => {
  return useMutation({ mutationFn: resendOTP });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: userSignup,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userLogout,
    onSuccess: () => queryClient.removeQueries({ queryKey: ["user"] }),
  });
};

export const useGoogleOAuth = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: googleOAuth,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
  });
};
