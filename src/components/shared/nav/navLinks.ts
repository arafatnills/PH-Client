import { UserRole } from "@/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export const dashboardRedirectRoute: Record<UserRole, string> = {
  PATIENT: "/patient",
  DOCTOR: "/doctor",
  ADMIN: "/admin",
  SUPER_ADMIN: "/super-admin",
};
