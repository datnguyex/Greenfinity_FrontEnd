import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import { StoreReducer } from '~/Redux/Store';
import { authenticationAction } from '~/Redux/Action';
import { SigninType, TimerSetters } from '~/Types';

export const createTemporaryAccount = async (
    infoSignUp: SigninType,
    setErrorInfom: React.Dispatch<React.SetStateAction<any>>,
) => {
    try {
        const response = await fetch('http://localhost:3001/authentications/createTemporaryAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(infoSignUp),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, data };
        } else {
            const errorData = await response.json();
            // If there are specific errors like 'phoneNumber', update the state
            if (errorData.phoneNumber) {
                setErrorInfom({ phoneNumber: errorData.phoneNumber });
            }
            return { success: false, error: errorData };
        }
    } catch (error: any) {
        console.error('error', error);

        if (error.response) {
            const { phoneNumber } = error.response.data;
            if (phoneNumber) {
                setErrorInfom({ phoneNumber });
            }
        } else {
            setErrorInfom({ general: 'error while submitting, try again !!!' });
        }

        return { success: false, error };
    }
};

export const CreateAccount = async (otp: string) => {
    const infoSignUp = sessionStorage.getItem('infoSignUp');

    try {
        if (infoSignUp) {
            const parsedInfoSignUp = JSON.parse(infoSignUp);

            parsedInfoSignUp.otp = otp;
            console.log('Data to send:', parsedInfoSignUp);
            const response = await axios.post('http://localhost:3001/authentications/signup', {
                fullName: parsedInfoSignUp.fullName,
                phoneNumber: parsedInfoSignUp.phoneNumber,
                keyChecked: parsedInfoSignUp.keyChecked,
                auth_code: parsedInfoSignUp.otp,
                password: parsedInfoSignUp.password,
            });

            if (response.status === 201) {
                Swal.fire({
                    title: 'Thành công',
                    text: 'Tạo tài khoản thành công',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000,
                    timerProgressBar: true,
                }).then(() => {
                    window.location.href = 'http://localhost:3000/login';
                    sessionStorage.removeItem('infoSignUp');
                });
            }
        } else {
            console.log('No infoSignUp found in sessionStorage');
        }
    } catch (error) {
        console.error('Error during account creation', error);
    }
};

export const ResendAuthCode = async ({ setMinutes, setSeconds }: TimerSetters) => {
    const infoSignUp = sessionStorage.getItem('infoSignUp');
    if (infoSignUp) {
        const parsedInfoSignUp = JSON.parse(infoSignUp);
        const requestData = {
            fullName: parsedInfoSignUp.fullName,
            phoneNumber: parsedInfoSignUp.phoneNumber,
            keyChecked: parsedInfoSignUp.keyChecked,
            password: parsedInfoSignUp.password,
        };
        try {
            const response = await fetch('http://localhost:3001/authentications/resendAuthCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                setMinutes(5);
                setSeconds(0);
            } else {
                const errorText = await response.text();
                console.error('Error:', errorText);
            }
        } catch (error) {
            console.error('Failed to send request:', error);
        }
    }
};
export const DeleteAuthCode = async (infoSignUp: any) => {
    if (infoSignUp) {
        const parsedInfoSignUp = JSON.parse(infoSignUp);
        const { keyChecked } = parsedInfoSignUp;
        try {
            const response = await axios.post('http://localhost:3001/authentications/deleteAuthCode', {
                fullName: parsedInfoSignUp.fullName,
                phoneNumber: parsedInfoSignUp.phoneNumber,
                keyChecked: parsedInfoSignUp.keyChecked,
                password: parsedInfoSignUp.password,
            });

            console.log('Response from server:', response);

            if (response.status === 200) {
                sessionStorage.removeItem('infoSignUp');
            }
        } catch (error) {
            console.error('Failed to delete auth code:', error);
        }
    }
};
export const Signin = async (
    phoneNumber: any,
    password: any,
    setErrorInfom: React.Dispatch<React.SetStateAction<any>>,
) => {
    try {
        const response = await axios.post('http://localhost:3001/authentications/signin', {
            phoneNumber,
            password,
        });

        if (response.data.accessToken) {
            Cookies.set('accessToken', response.data.accessToken, { expires: 7, path: '/' });
            // Cookies.set('accessToken', response.data.accessToken, { expires: 30 / (60 * 60 * 24), path: '/' });

            const token = response.data.accessToken;
            const authResponse = await axios.get('http://localhost:3001/authentications/UserAuthenticate', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (authResponse.status === 200) {
                console.log('User authenticated successfully!', authResponse);
                const { full_name, phone_number } = authResponse.data.data;
                StoreReducer.dispatch(authenticationAction({ phoneNumber: phone_number, fullName: full_name }));
                Swal.fire({
                    title: 'Success!',
                    text: 'You have logged in successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 2000,
                    timerProgressBar: true,
                }).then(() => {
                    // Redirect after the alert closes
                    window.location.href = 'http://localhost:3000/';
                });
            }
        } else {
            console.log('Login failed: ', response.data);
        }
    } catch (error: any) {
        console.log(error.response);
        if (error.response.data.password) {
            return setErrorInfom({ password: error.response.data.password });
        } else if (error.response.data.phoneNumber) {
            return setErrorInfom({ phoneNumber: error.response.data.phoneNumber });
        }
    }
};
