import { LucideIcon } from "lucide-react";

export interface LoginUser {
  email: string;
  password: string;
}

export interface SignupUser {
  name: string;
  email: string;
  password: string;
  patient: {
    contactNumber?: string;
  };
}

export interface VerifyOTP {
  email: string;
  otp: string;
}

export type UserRole = "SUPER_ADMIN" | "DOCTOR" | "PATIENT" | "ADMIN";

export interface SubRouteItem {
  title: string;
  url: string;
}

export interface MainRouteItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SubRouteItem[];
}

// Type application for your array
export type RouteConfig = MainRouteItem[];
