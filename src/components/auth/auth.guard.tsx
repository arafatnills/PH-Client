"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthLoading from "./auth.loading";


export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data, isPending, isError } = useGetMe();
  const user = data?.data;

  useEffect(() => {
    if (isPending) return
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

  return (
    <>
      {children}
    </>
  );
}
