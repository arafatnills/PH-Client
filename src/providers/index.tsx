import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import GoogleAuthProvider from "./google.auth.provider";
import QueryProvider from "./query.provider";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <GoogleAuthProvider>
        <QueryProvider>
          <TooltipProvider>
            <Toaster position="bottom-right" richColors />
            {children}
          </TooltipProvider>
        </QueryProvider>
      </GoogleAuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
