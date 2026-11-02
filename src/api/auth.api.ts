import apiClient from "@/lib/apiClient";
import { LoginUser, SignupUser, VerifyOTP } from "@/types";


export function userLogin(payload: LoginUser) {
  return apiClient("/auth/login", { method: "POST", body: payload });
}
export function userVerifyOTP(payload: VerifyOTP) {
  return apiClient("/auth/verify-email", { method: "POST", body: payload });
}

export function resendOTP(payload: { email: string }) {
  return apiClient("/auth/resend-otp", { method: "POST", body: payload });
}

export function userSignup(payload: SignupUser) {
  return apiClient("/auth/signup", { method: "POST", body: payload });
}

export function userLogout() {
  return apiClient("/auth/logout", { method: "POST" });
}

export function getMe() {
  return apiClient("/auth/me");
}

export function googleOAuth(payload: { idToken: string }) {
  return apiClient("/auth/google", { body: payload, method: "POST" });
}
