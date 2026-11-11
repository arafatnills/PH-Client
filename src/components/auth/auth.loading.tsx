import { LoaderIcon } from "lucide-react";

const AuthLoading = ({ label = "verifying account..." }: { label?: string }) => {
  return (
    <div className="flex items-center gap-2 justify-center h-screen text-lg font-semibold text-gray-500">
      <LoaderIcon className="animate-spin" /> {label}
    </div>
  );
};

export default AuthLoading;
