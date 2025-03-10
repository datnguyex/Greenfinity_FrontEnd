import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CloseXBlack, CrossHatchedEyes } from '~/assets/Icons/Icon';

type AddressFormProps = {
    handlelTypeDisplay: (value: string) => void;
    t: (key: string) => string;
};

function ChangePassword({ handlelTypeDisplay, t }: AddressFormProps) {
    // Check the same and reset password
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [errorPass, setErrorPass] = useState({
        currentPassword: '',
        newPassword: '',
        reEnterPassword: '',
    });

    const currentPassInput = (e: any) => {
        setCurrentPassword(e);
    };
    const newPassInput = (e: any) => {
        setNewPassword(e);
    };
    const reEnterPassInput = (e: any) => {
        setReEnterPassword(e);
    };

    // Check for errors in the password fields
    const checkErrorPass = () => {
        let isValid = true;

        if (currentPassword === '') {
            setErrorPass((prevState) => ({
                ...prevState,
                currentPassword: 'The password cannot be empty',
            }));
            isValid = false;
        }
        if (newPassword !== reEnterPassword) {
            setErrorPass((prevState) => ({
                ...prevState,
                newPassword: 'The passwords do not match',
            }));
            isValid = false;
        }
        if (newPassword === '') {
            setErrorPass((prevState) => ({
                ...prevState,
                newPassword: 'The new password cannot be empty',
            }));
            isValid = false;
        }
        if (reEnterPassword === '') {
            setErrorPass((prevState) => ({
                ...prevState,
                reEnterPassword: 'Please confirm the new password',
            }));
            isValid = false;
        }

        return isValid;
    };

    const checkNewPassword = async () => {
        const accessToken = Cookies.get('accessToken');

        try {
            const response = await axios.post(
                'http://localhost:3001/account/checkPassword',
                {
                    currentPassword: currentPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );

            if (response.status === 200) {
                return true;
            }
        } catch (error: any) {
            if (error.response) {
                setErrorPass((prevState) => ({
                    ...prevState,
                    currentPassword: error.response.data.message || 'Error occurred while checking the password.',
                }));
            } else {
                setErrorPass((prevState) => ({
                    ...prevState,
                    currentPassword: 'An unexpected error occurred while checking the password.',
                }));
            }
        }

        return false;
    };

    const handleResetPassword = async () => {
        // Check for validation errors
        if (!checkErrorPass()) {
            return;
        }

        // Check for the current password
        if (!(await checkNewPassword())) {
            return;
        }

        const accessToken = Cookies.get('accessToken');

        try {
            const response = await axios.post(
                'http://localhost:3001/account/resetPassword',
                {
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                    reEnterPassword: reEnterPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );

            if (response.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Password reset successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000,
                    timerProgressBar: true,
                }).then(() => {
                    handlelTypeDisplay('');
                });
            }
        } catch (error: any) {
            if (error.response) {
                console.log('Unexpected error: ', error.message);
            }
        }
    };

    //set error to null
    useEffect(() => {
        setErrorPass((prevState) => ({
            ...prevState,
            currentPassword: '',
        }));
    }, [currentPassword]);
    useEffect(() => {
        setErrorPass((prevState) => ({
            ...prevState,
            newPassword: '',
        }));
    }, [newPassword]);
    useEffect(() => {
        setErrorPass((prevState) => ({
            ...prevState,
            reEnterPassword: '',
        }));
    }, [reEnterPassword]);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>
            <div className="w-[586px] min-h-[500px] fixed bg-white rounded-xl mx-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
                <div
                    onClick={() => handlelTypeDisplay('')}
                    className="w-6 h-6 left-[546px] top-[16px] absolute cursor-pointer"
                >
                    <CloseXBlack />
                </div>
                <div className="left-[31px] top-[40px] absolute text-[#009383] text-[32px] font-semibold leading-[38.40px]">
                    {t('ResetPassword')}
                </div>
                <div className="left-[31px] top-[91px] absolute flex-col justify-start items-start gap-5 inline-flex">
                    {/* Current Password */}
                    <div className="min-h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">
                                {' '}
                                {t('OldPassword')}
                            </div>
                        </div>
                        <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                            <input
                                type="password"
                                onChange={(e) => currentPassInput(e.target.value)}
                                className="text-[#333] text-[17px] font-normal w-[100%] outline-none bg-transparent"
                                placeholder={t('OldPassword')}
                            ></input>
                            <CrossHatchedEyes />
                        </div>
                        {errorPass.currentPassword && (
                            <div className="text-center text-red-600 text-[17px] font-semibold mb-[5px]">
                                {' '}
                                {errorPass.currentPassword}
                            </div>
                        )}
                    </div>

                    {/* New Password */}
                    <div className="min-h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">
                                {' '}
                                {t('NewPassword')}
                            </div>
                        </div>
                        <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                            <input
                                type="password"
                                onChange={(e) => newPassInput(e.target.value)}
                                className="text-[#333] text-[17px] font-normal w-[100%] outline-none bg-transparent"
                                placeholder={t('NewPassword')}
                            ></input>
                            <CrossHatchedEyes />
                        </div>
                        {errorPass.newPassword && (
                            <div className="text-center text-red-600 text-[17px] font-semibold mb-[5px]">
                                {' '}
                                {errorPass.newPassword}
                            </div>
                        )}
                    </div>

                    {/* Re-enter Password */}
                    <div className="min-h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">
                                {t('ConfirmNewPassWord')}
                            </div>
                        </div>
                        <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                            <input
                                type="password"
                                onChange={(e) => reEnterPassInput(e.target.value)}
                                className="text-[#333] text-[17px] font-normal w-[100%] outline-none bg-transparent"
                                placeholder={t('ConfirmNewPassWord')}
                            ></input>
                            <CrossHatchedEyes />
                        </div>
                        {errorPass.reEnterPassword && (
                            <div className="text-center text-red-600 text-[17px] font-semibold mb-[5px]">
                                {' '}
                                {errorPass.reEnterPassword}
                            </div>
                        )}
                    </div>

                    {/* Reset Button */}
                    <div
                        onClick={() => handleResetPassword()}
                        className="w-[118px] h-[35px] mx-auto cursor-pointer px-9  bg-[#009383] rounded-lg justify-center items-center gap-2.5 inline-flex"
                    >
                        <div className="text-center text-white text-[20px] font-semibold leading-normal">
                            {' '}
                            {t('save')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
