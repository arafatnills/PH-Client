import apiClient from "@/lib/apiClient";
import { LoginUser } from "@/types/auth.type";

export function userLogin(payload: LoginUser) {
  return apiClient("/auth/login", { method: "POST", body: payload });
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
