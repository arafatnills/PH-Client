"use client";

import { useGetMe } from "@/hooks";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AccessDenied from "./access.denied";
import AuthLoading from "./auth.loading";

interface RoleGuardProps {
  children: React.ReactNode;
  roles: UserRole[]; // Assuming UserRole is an enum or type that defines user roles
}

export function RoleGuard({ children, roles }: RoleGuardProps) {
  const router = useRouter();
  const { data, isPending, isError } = useGetMe();
  const user = data?.data;

  const isAuthorized = !!user && roles.includes(user.role as UserRole);

  useEffect(() => {
    if (isPending) return;
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user, router]);

  if (isPending) {
    return <AuthLoading />;
  }
  if (isError || !user) {
    return <AuthLoading label="redirecting to login..." />;
  }

  if (isAuthorized) {
    return <>{children}</>;
  }
  
  return <AccessDenied />;
}
