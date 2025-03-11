import { SetErrorInfo, SignUpInfo } from '~/Types/AuthType';

export const AuthValidate = (infoSignUp: SignUpInfo, setErrorInfom: SetErrorInfo) => {
    const { fullName, phoneNumber, password, checkedClause } = infoSignUp;

    if (!fullName.trim()) {
        setErrorInfom({ fullName: 'Full name cannot be empty' });
        return false;
    }

    if (fullName.length > 255) {
        setErrorInfom({ fullName: 'Full name cannot exceed 255 characters' });
        return false;
    }

    const regexFullnam = /[!@#$%^&*(),.?":{}|<>]/g;
    if (regexFullnam.test(fullName)) {
        setErrorInfom({ fullName: 'Full name cannot contain special characters' });
        return false;
    }

    if (!phoneNumber.trim()) {
        setErrorInfom({ phoneNumber: 'Phone number cannot be empty' });
        return false;
    }

    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        setErrorInfom({ phoneNumber: 'Phone number must be between 10 and 11 characters' });
        return false;
    }

    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (regex.test(phoneNumber)) {
        setErrorInfom({ phoneNumber: 'Phone number cannot contain special characters' });
        return false;
    }

    const numberRegex = /\D/;
    if (numberRegex.test(phoneNumber)) {
        setErrorInfom({ phoneNumber: 'Phone number can only contain digits' });
        return false;
    }

    const vietnamPhoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!vietnamPhoneRegex.test(phoneNumber)) {
        setErrorInfom({
            phoneNumber: 'Invalid phone number.',
        });
        return false;
    }

    if (!password.trim()) {
        setErrorInfom({ password: 'Password cannot be empty' });
        return false;
    }

    if (password.length < 6) {
        setErrorInfom({ password: 'Password must be at least 6 characters long' });
        return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
        setErrorInfom({
            password: 'Password must contain at least one uppercase letter, one lowercase letter, and one digit',
        });
        return false;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
        setErrorInfom({
            password: 'Password must contain at least one special character',
        });
        return false;
    }

    return true;
};
