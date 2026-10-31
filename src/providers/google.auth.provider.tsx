import { GoogleOAuthProvider } from "@react-oauth/google";


const GoogleAuthProvider = ({children}: {children: React.ReactNode}) => {
    const clId = process.env.GOOGLE_CLIENT_ID!
  return (
    <GoogleOAuthProvider clientId={clId}>
        {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
