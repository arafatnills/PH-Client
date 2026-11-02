export interface LoginUser {
  email: string;
  password: string;
}

export interface SignupUser {
  name: string;
  email: string;
  password: string;
  patient: {
    contactNumber?: string;
  };
}


export interface VerifyOTP {
  email: string;
  otp: string;
}