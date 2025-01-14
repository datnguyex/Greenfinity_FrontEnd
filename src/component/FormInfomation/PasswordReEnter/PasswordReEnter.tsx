import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { CloseXBlack } from '~/component/Icon';

type AddressFormProps = {
    handlelTypeDisplay: (value: string) => void;
    t: (key: string) => string;
};
function PasswordReEnter({ handlelTypeDisplay, t }: AddressFormProps) {
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const passwordInput = (e: any) => {
        setPassword(e);
    };
    const passReEnterInput = (e: any) => {
        setReEnterPassword(e);
    };
    const checkPassword = () => {
        if (password != reEnterPassword) {
            return setErrorPassword('the password is not same');
        } else if (password == '' || reEnterPassword == '') {
            return setErrorPassword('the password can not be emty');
        }
        return true;
    };
    const handleSubmitPassword = async () => {
        const accessToken = Cookies.get('accessToken');
        if (!checkPassword()) {
            return;
        }
        try {
            const response = await axios.post(
                'http://localhost:3001/account/checkPassword',
                {
                    currentPassword: password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );

            if (response.status === 200) {
                console.log(response.data.message);
                handlelTypeDisplay('thong-tin-xoa-tai-khoan');
            }
        } catch (error: any) {
            if (error.response) {
                setErrorPassword(error.response.data.message || 'Error occurred while handling request');
            } else {
                // Nếu có lỗi mạng hoặc các lỗi khác
                setErrorPassword('An unexpected error occurred');
            }
        }
    };
    useEffect(() => {
        setErrorPassword('');
    }, [reEnterPassword, password]);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] "></div>
            <div className="w-[588px] h-[340px]  bg-white rounded-xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden z-[100]">
                <div className="left-[32px] top-[29.50px] absolute flex-col justify-start items-center gap-6 inline-flex">
                    <div className="self-stretch h-[214px] flex-col justify-start items-center gap-7 flex">
                        <div className="text-center text-[#ff4343] text-[24px] font-bold ">{t('ReEnterPassowrd')}</div>
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 flex">
                                <div className="justify-start items-start gap-0.5 inline-flex">
                                    <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">
                                        {t('CurrentPasword')}
                                    </div>
                                </div>
                                <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                                    <input
                                        type="password"
                                        onChange={(e) => passwordInput(e.target.value)}
                                        placeholder={t('CurrentPasword')}
                                        className="text-[17px] font-normal  outline-none w-[100%] bg-transparent text-black"
                                    ></input>
                                    <div className="w-6 h-6 relative  overflow-hidden" />
                                </div>
                            </div>
                            <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 flex">
                                <div className="justify-start items-start gap-0.5 inline-flex">
                                    <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">
                                        {t('ReEnterPassowrd')}
                                    </div>
                                </div>
                                <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                                    <input
                                        type="password"
                                        onChange={(e) => passReEnterInput(e.target.value)}
                                        placeholder={t('ReEnterPassowrd')}
                                        className="text-black text-[17px] font-normal  outline-none w-[100%] bg-transparent"
                                    ></input>
                                    <div className="w-6 h-6 relative  overflow-hidden" />
                                </div>
                                <div className="text-center text-red-600 text-[17px] font-semibold ">
                                    {errorPassword}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 inline-flex">
                        <div
                            onClick={() => handlelTypeDisplay('')}
                            className="w-[130px] h-11 px-6 py-7 cursor-pointer bg-[#f0f0f0] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex"
                        >
                            <div className="text-[#494949] text-[18px] font-medium "> {t('cancle')}</div>
                        </div>
                        <div
                            onClick={() => handleSubmitPassword()}
                            className="px-6 py-7 h-11 bg-[#ff4343] cursor-pointer rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden"
                        >
                            <div className="text-white text-[18px] font-bold "> {t('confirm')}</div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => handlelTypeDisplay('')}
                    className="pl-[5px] pr-[4.99px] cursor-pointer pt-[4.99px] pb-[5.01px] left-[552px] top-[12px] absolute justify-center items-center inline-flex"
                >
                    <CloseXBlack />
                </div>
            </div>
        </>
    );
}

export default PasswordReEnter;
