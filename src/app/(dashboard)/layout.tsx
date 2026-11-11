import { AuthGuard } from "@/components/auth/auth.guard";

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default DashboardRootLayout;
