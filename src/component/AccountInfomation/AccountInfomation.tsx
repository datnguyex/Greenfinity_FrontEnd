import { Link } from 'react-router-dom';
import { DeleteUser, EditSign } from '../Icon';
import { BlockCircle, PlusWhite, SignEditWhite } from '../Icon/Icon';
import AddressForm from '../FormInfomation/AddressForm/AddressForm';
import { useState } from 'react';
import ChangePassword from '../FormInfomation/ChangePassword/ChangePassword';
import DeleteAdress from '../FormInfomation/DeleteAdress/DeleteAdress';
import DeleteAccount from '~/Page/DeleteAccount/DeleteAccount';
import PasswordReEnter from '../FormInfomation/PasswordReEnter/PasswordReEnter';
import AccountDeleteInfo from '../FormInfomation/AccountDeleteInfo/AccountDeleteInfo';

interface UserInformation {
    full_name?: string;
    phone_number?: string;
    email?: string;
    image?: string;
    gender?: string;
    description?: string;
    date_of_birth?: string;
    rank?: string;
    current_greecoin?: string;
    poin_spent?: string;
}
interface AccountInfomationProps {
    t: (key: string) => string;
    userInfomation: UserInformation | undefined;
}
const AccountInfomation: React.FC<AccountInfomationProps> = ({ t, userInfomation }) => {
    const [typeDisplay, setTypeDisplay] = useState();
    const handlelTypeDisplay = (value: any) => {
        setTypeDisplay(value);
    };
    return (
        <>
            {typeDisplay === 'them-dia-chi' && (
                <AddressForm t={t} type={'123'} handlelTypeDisplay={handlelTypeDisplay} />
            )}
            {typeDisplay === 'thay-doi-dia-chi' && (
                <AddressForm t={t} type={'thay-doi-dia-chi'} handlelTypeDisplay={handlelTypeDisplay} />
            )}
            {typeDisplay === 'doi-mat-khau' && <ChangePassword t={t} handlelTypeDisplay={handlelTypeDisplay} />}
            {typeDisplay === 'xoa-tai-khoan' && <DeleteAccount t={t} handlelTypeDisplay={handlelTypeDisplay} />}
            {typeDisplay === 'nhap-lai-mat-khau' && <PasswordReEnter t={t} handlelTypeDisplay={handlelTypeDisplay} />}
            {typeDisplay === 'thong-tin-xoa-tai-khoan' && (
                <AccountDeleteInfo t={t} handlelTypeDisplay={handlelTypeDisplay} />
            )}

            <div className="mx-auto flex justify-center w-[100%] mt-[30px]">
                <div className="w-[100%] h-[668px] px-[29px] py-5 bg-white rounded-xl border border-[#66beb5] flex-col justify-start items-center gap-[21px] inline-flex">
                    <div className="self-stretch h-40 flex-col justify-start items-start gap-3 flex">
                        <div className="justify-between items-center  inline-flex w-[100%]">
                            <div className="text-center text-[#009383] text-[32px] font-bold leading-[38.40px]">
                                {t('AccountInformation')}
                            </div>
                            <Link
                                to={'/sua-trang-ca-nhan'}
                                className="cursor-pointer self-stretch px-3 py-2.5 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-end items-center gap-2 inline-flex overflow-hidden"
                            >
                                <SignEditWhite />
                                <div className="text-white text-[20px] font-medium ">{t('Update')}</div>
                            </Link>
                        </div>
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="justify-center items-start gap-[77px] inline-flex">
                                <div className="text-[#505050] text-[16px] font-normal leading-normal">
                                    {t('Fullname')}
                                </div>
                                <div className="text-[#494949] text-[16px] font-medium leading-normal">
                                    {' '}
                                    {userInfomation?.full_name}
                                </div>
                            </div>
                            <div className="pr-[66px] justify-start items-start gap-[88px] inline-flex">
                                <div className="text-[#505050] text-[16px] font-normal leading-normal">
                                    {' '}
                                    {t('Gender')}
                                </div>
                                <div className="text-[#494949] text-[16px] font-medium leading-normal">
                                    {' '}
                                    {userInfomation?.gender}
                                </div>
                            </div>
                            <div className="h-6 pr-0.5 justify-center items-start gap-[74px] inline-flex">
                                <div className="text-[#505050] text-[16px] font-normal leading-normal">
                                    {t('Dateofbirth')}
                                </div>
                                <div className="w-[107px] h-6 text-[#494949] text-[16px] font-medium leading-normal">
                                    {userInfomation?.date_of_birth}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[0px] mt-[40px] border border-[#dbdbdb]"></div>
                    <div className="self-stretch h-[120px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-between items-center  inline-flex w-[100%]">
                            <div className="text-center text-[#009383] text-[32px] font-bold leading-[38.40px]">
                                {t('Logininformation')}
                            </div>
                            <div
                                onClick={() => handlelTypeDisplay('doi-mat-khau')}
                                className="cursor-pointer self-stretch px-3 py-2.5 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-end items-center gap-2 inline-flex overflow-hidden"
                            >
                                <BlockCircle />
                                <div className="text-white text-[20px] font-medium "> {t('ResetPassword')}</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="w-[316px] justify-start items-center gap-[76px] inline-flex">
                                <div className="text-[#505050] text-[20px] font-normal leading-normal">Email</div>
                                <div className="text-[#494949] text-[20px] font-medium leading-normal">
                                    {userInfomation?.email}
                                </div>
                            </div>
                            <div className="justify-start items-start gap-[42px] inline-flex">
                                <div className="text-[#505050] text-[20px] font-normal leading-normal">
                                    {t('password')}
                                </div>
                                <div className="justify-start items-center gap-[99px] flex">
                                    <div className="w-[92px] h-2 justify-center items-start gap-1 flex">
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                        <div className="w-2 h-2 relative bg-[#494949] rounded-lg" />
                                    </div>
                                    <div className="w-6 h-6 px-0.5 py-0.5 opacity-0 justify-center items-center flex overflow-hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[0px] border border-[#dbdbdb]"></div>
                    <div className="self-stretch h-[199px] flex-col justify-start items-start gap-6 flex">
                        <div className="justify-between items-center  inline-flex w-[100%]">
                            <div className="text-center text-[#009383] text-[32px] font-bold leading-[38.40px]">
                                {t('MyAddress')}
                            </div>
                            <div
                                onClick={() => handlelTypeDisplay('them-dia-chi')}
                                className="cursor-pointer self-stretch px-3 py-2.5 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-end items-center gap-2 inline-flex overflow-hidden"
                            >
                                <PlusWhite />
                                <div className="text-white text-[20px] font-medium "> {t('AddNewAddress')}</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[131px] jhustify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-[131px] p-4 bg-[#f6f6f6] rounded-[10px] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                                <div className="w-5 h-5 relative  overflow-hidden" />
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="text-[#494949] text-[20px] font-bold leading-normal">
                                            Nhà riêng 2
                                        </div>
                                        <div className="p-2 bg-[#15bdd6] rounded-[30px] justify-center items-center gap-2.5 flex">
                                            <div className="text-white text-[13px] font-semibold leading-[14.40px] tracking-tight">
                                                {t('default')}
                                            </div>
                                        </div>
                                        <div onClick={() => handlelTypeDisplay('thay-doi-dia-chi')}>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() => handlelTypeDisplay('thay-doi-dia-chi')}
                                            >
                                                <EditSign />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 relative  overflow-hidden" />
                                </div>
                                <div className="self-stretch">
                                    <span className="text-[#494949] text-[18px] font-semibold leading-snug">
                                        {t('address')}:{' '}
                                    </span>
                                    <span className="text-[#494949] text-[18px] font-normal leading-snug">
                                        1-1A Tạ Quang Bửu, P6, Q8, Tp Hồ Chí Minh
                                    </span>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-[131px] p-4 bg-[#f6f6f6] rounded-[10px] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                                <div className="w-5 h-5 relative  overflow-hidden" />
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="text-[#494949] text-[20px] font-bold leading-normal">
                                            Nhà riêng 2
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => handlelTypeDisplay('thay-doi-dia-chi')}
                                        >
                                            <EditSign />
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 relative  overflow-hidden" />
                                </div>
                                <div className="self-stretch">
                                    <span className="text-[#494949] text-[18px] font-semibold leading-snug">
                                        {t('address')}:{' '}
                                    </span>
                                    <span className="text-[#494949] text-[18px] font-normal leading-snug">
                                        1-1A Tạ Quang Bửu, P6, Q8, Tp Hồ Chí Minh
                                    </span>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-[131px] p-4 bg-[#f6f6f6] rounded-[10px] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                                <div className="w-5 h-5 relative  overflow-hidden" />
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="text-[#494949] text-[20px] font-bold leading-normal tracking-tight">
                                            Nhà riêng 2
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => handlelTypeDisplay('thay-doi-dia-chi')}
                                        >
                                            <EditSign />
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 relative overflow-hidden" />
                                </div>
                                <div className="self-stretch">
                                    <span className="text-[#494949] text-[18px] font-semibold leading-snug">
                                        {t('address')}:{' '}
                                    </span>
                                    <span className="text-[#494949] text-[18px] font-normal leading-snug">
                                        1-1A Tạ Quang Bửu, P6, Q8, Tp Hồ Chí Minh
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-11 px-6 py-7 bg-[#ffeaea] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-4 inline-flex overflow-hidden">
                        <DeleteUser />
                        <div
                            onClick={() => handlelTypeDisplay('xoa-tai-khoan')}
                            className="text-[#ff4343] text-[18px] font-medium cursor-pointer"
                        >
                            {t('DeleteAccount')}
                        </div>
                    </div>
                </div>
            </div>
            {/* item */}
        </>
    );
};

export default AccountInfomation;
