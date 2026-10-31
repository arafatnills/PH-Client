import { useGoogleOAuth } from "@/hooks";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const GoogleLoginComponent = () => {
  // google
  const { mutate: googleLogin, isPending: googlePending } = useGoogleOAuth();
  const router = useRouter()
  const handelGoogleSuccess = (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;
    if (!idToken) {
      toast.error("Logged in Failed", {
        description: getErrorMessage("Something went wrong!"),
      });
      return;
    }
    googleLogin(
      { idToken },
      {
        onSuccess: (data) => {
          toast.success("Logged in Success", {
            description: "Welcome Back",
          });

          router.replace("/");
        },
        onError: (err) => {
          toast.error("Logged in Failed", {
            description: getErrorMessage(err),
          });
        },
      },
    );
  };
  const handelGoogleError = () => {};
  return (
    <GoogleLogin
      text="continue_with"
      onSuccess={handelGoogleSuccess}
      onError={handelGoogleError}
    />
  );
};

export default GoogleLoginComponent;
