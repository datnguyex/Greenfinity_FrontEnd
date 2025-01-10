export interface SigninType {
    fullName: string;
    phoneNumber: string;
    password: string;
    checkedClause: boolean;
}
export interface UserInfoReturnType {
    fullName: string;
    phoneNumber: string;
    keyChecked: boolean;
    password: string;
}
export interface TimerSetters {
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}
