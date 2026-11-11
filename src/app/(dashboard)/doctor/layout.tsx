import { RoleGuard } from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard.shell";
import React from "react";

const DoctorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGuard roles={["DOCTOR"]}>
      <DashboardShell role="DOCTOR">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default DoctorLayout;
