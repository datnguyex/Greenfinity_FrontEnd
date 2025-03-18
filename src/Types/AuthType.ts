import { ReactNode } from 'react';

//sign in type in sign in page
export interface InfoSignup {
    fullName: string;
    phoneNumber: string;
    password: string;
    checkedClause: boolean;
}

// export interface UserInfoReturnType {
//     fullName: string;
//     phoneNumber: string;
//     keyChecked: boolean;
//     password: string;
// }

//time type in otp page
export interface TimerSetters {
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

//sign up type in sign up page
export type SignUpInfo = {
    fullName: string;
    phoneNumber: string;
    password: string;
    checkedClause: boolean;
};

export type SetErrorInfo = any;

//auth layout prop type in auth layout component
export interface AuthLayoutProps {
    children: ReactNode;
}
//input auth prop type in input auth component
export interface InputAuthProps {
    label: string | undefined;
    type: string | undefined;
    placeholder: string | undefined;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}

//sign in type in sign in page
export type SigninType = {
    phoneNumber: string | undefined;
    password: string | undefined;
    setErrorInfom: React.Dispatch<React.SetStateAction<any>>;
};
