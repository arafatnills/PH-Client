import GoogleAuthProvider from "./google.auth.provider";
import QueryProvider from "./query.provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleAuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </GoogleAuthProvider>
  );
};

export default Providers;
