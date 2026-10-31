import Logo from "@/components/shared/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 flex w-full justify-center pt-20 md:justify-start md:pl-12 md:pt-12">
        <Logo />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
