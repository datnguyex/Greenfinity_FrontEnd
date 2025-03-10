import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { leafHomeLeft, leafHomeRight } from '~/assets/Images/';
import { ManRankAvatar, AvatarMan2, AvatarWoman1, AvatarWoman2, AvatarWoman3, AvatarWoman4 } from '~/assets/Images/';
import { EditSign } from '~/assets/Icons';
import { useState } from 'react';
import { RoundedMan1, RoundedMan2, RoundedWoman1, RoundedWoman2, RoundedWoman3, RoundedWoman4 } from '~/assets/Images/';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { error, info } from 'console';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { StoreReducer } from '~/Redux/Store';
import { authenticationAction } from '~/Redux/Action';
import { userInfo } from 'os';
import { current } from '@reduxjs/toolkit';
function Profile() {
    //language
    const { t } = useTranslation(['updateProfile']);

    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);

    //change value and submit info user

    interface InfoUser {
        name: string;
        phone_number: string;
        gender: string;
        email: string;
        description: string;
        dob: string;
        avatarID: number;
        bigAvatar: string;
    }

    const [errorInfoUser, setErrorInfoUser] = useState({
        name: '',
        phone_number: '',
        gender: '',
        email: '',
        description: '',
        dob: '',
        bigAvatar: '',
    });

    const [infoUser, setInfoUser] = useState<InfoUser>({
        name: '',
        phone_number: '',
        gender: '',
        email: '',
        description: '',
        dob: '',
        avatarID: 0,
        bigAvatar: ManRankAvatar,
    });
    const [currentInfoUser, setCurrentInfoUser] = useState<InfoUser>({
        name: '',
        phone_number: '',
        gender: '',
        email: '',
        description: '',
        dob: '',
        avatarID: 1,
        bigAvatar: '',
    });

    const checkErrorInput = () => {
        const newErrorInfo = { ...errorInfoUser }; // Sao chép để tránh thay đổi trực tiếp
        let isValid = true;

        // Kiểm tra "name"
        const regexFullnam = /[!@#$%^&*(),.?":{}|<>]/g;

        if (infoUser.name.trim()) {
            if (infoUser.name.length > 255) {
                newErrorInfo.name = 'Full name cannot exceed 255 characters';
                isValid = false;
            } else if (regexFullnam.test(infoUser.name)) {
                newErrorInfo.name = 'Full name cannot contain special characters';
                isValid = false;
            }
        }

        const regex = /[!@#$%^&*(),.?":{}|<>]/g;
        const numberRegex = /^[0-9]+$/;

        if (infoUser.phone_number.trim()) {
            if (regex.test(infoUser.phone_number)) {
                newErrorInfo.phone_number = 'Phone number cannot contain special characters';
                isValid = false;
            } else if (!numberRegex.test(infoUser.phone_number)) {
                newErrorInfo.phone_number = 'Phone number must contain only digits';
                isValid = false;
            } else if (infoUser.phone_number.trim().length !== 10 && infoUser.phone_number.trim().length !== 11) {
                newErrorInfo.phone_number = 'Phone number must be 10 or 11 characters long';
                isValid = false;
            }
        }

        // Kiểm tra "email"
        if (infoUser.email.trim()) {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(infoUser.email)) {
                newErrorInfo.email = 'Invalid email format';
                isValid = false;
            }
        }

        // Kiểm tra "dob"
        if (infoUser.dob.trim()) {
            const dob = new Date(infoUser.dob);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (dob > today) {
                newErrorInfo.dob = 'Date of birth cannot be in the future';
                isValid = false;
            }
        }

        // Kiểm tra "description"
        if (infoUser.description.trim()) {
            if (infoUser.description.length > 255) {
                newErrorInfo.description = 'Description cannot exceed 255 characters';
                isValid = false;
            }
        }

        setErrorInfoUser(newErrorInfo);

        return isValid;
    };
    const fetchUserInformation = async () => {
        const token = Cookies.get('accessToken');

        if (!token) {
            console.error('Access token is missing');
            return;
        }

        try {
            const authResponse = await axios.get('http://localhost:3001/authentications/UserAuthenticate', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newDate = authResponse.data.newDate; // Đây là ngày được trả về từ API
            const userData = authResponse.data.data; // Dữ liệu người dùng

            // Cập nhật trạng thái với dữ liệu người dùng
            setCurrentInfoUser({
                name: userData.full_name,
                phone_number: userData.phone_number,
                gender: userData.gender,
                email: userData.email,
                description: userData.description,
                dob: formatDate(newDate),
                avatarID: userData.avatarID || 1,
                bigAvatar: userData.image,
            });
        } catch (error) {
            console.error('Error fetching user information:', error);
        }
    };
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = date.getFullYear();

        // Định dạng ngày theo yêu cầu
        return `${day < 10 ? '0' + day : day} Th ${month < 10 ? '0' + month : month} ${year}`;
    };

    useEffect(() => {
        fetchUserInformation();
    }, []);
    console.log('currentUser', currentInfoUser);

    const handleInfoUser = (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | React.MouseEvent<HTMLDivElement>,
    ) => {
        if (e && 'value' in e.target) {
            const { name, value } = e.target;
            setInfoUser((prevInfoUser) => ({
                ...prevInfoUser,
                [name]: value,
            }));
        } else {
            const gender = e.target instanceof HTMLElement ? e.target.dataset.gender : '';

            if (typeof gender === 'string') {
                setInfoUser((prevInfoUser) => ({
                    ...prevInfoUser,
                    gender: gender,
                }));
                handleOpenBirth();
            } else {
                console.error('Invalid gender value:', gender);
            }
        }
    };

    // console.log('infoUser', infoUser);
    // console.log('error', errorInfoUser);
    //open option ggenger
    const [openBirth, setOpenBirth] = useState(false);
    const handleOpenBirth = () => {
        setOpenBirth(!openBirth);
    };
    const vouchers = Array(6).fill({
        title: 'Giải tư - Voucher Quà tặng thời trang Uniqlo',
        quantity: 5,
        method: 'Trao cho (05) người có Điểm Chi Tiêu cao tiếp theo Giải ba.',
        giftValue: '800.000 đồng/voucher',
        points: 50,
    });
    const arrAvatar = [
        {
            id: 1,
            smallAvatar: RoundedMan1,
            bigAvatar: ManRankAvatar,
        },
        {
            id: 2,
            smallAvatar: RoundedMan2,
            bigAvatar: AvatarMan2,
        },
        {
            id: 3,
            smallAvatar: RoundedWoman1,
            bigAvatar: AvatarWoman1,
        },
        {
            id: 4,
            smallAvatar: RoundedWoman2,
            bigAvatar: AvatarWoman2,
        },
        {
            id: 5,
            smallAvatar: RoundedWoman3,
            bigAvatar: AvatarWoman3,
        },
        {
            id: 6,
            smallAvatar: RoundedWoman4,
            bigAvatar: AvatarWoman4,
        },
    ];
    const handleAvatarClick = (avatarId: number, bigAvatar: string) => {
        setInfoUser((prevInfoUser) => ({
            ...prevInfoUser,
            avatarID: avatarId,
            bigAvatar: bigAvatar,
        }));

        if (currentInfoUser.bigAvatar != '') {
            setCurrentInfoUser((prevInfoUser: any) => ({
                ...prevInfoUser,
                avatarID: '', // Reset avatarID
                bigAvatar: '', // Reset bigAvatar
            }));
        }
    };
    const handleEditProfile = async () => {
        if (!checkErrorInput()) {
            return; // Nếu có lỗi, không gửi dữ liệu
        }

        const accessToken = Cookies.get('accessToken');
        try {
            // Gửi yêu cầu cập nhật thông tin người dùng
            const response = await fetch('http://localhost:3001/account/editProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(infoUser), // Dữ liệu cần gửi
            });

            // Kiểm tra phản hồi từ server
            if (response.ok) {
                const updatedInfo: { [key: string]: any } = {};

                if (infoUser.name !== '') {
                    updatedInfo.fullName = infoUser.name;
                } else {
                    updatedInfo.fullName = currentInfoUser.name;
                }

                if (infoUser.phone_number !== '') {
                    updatedInfo.phone_number = infoUser.phone_number;
                } else {
                    updatedInfo.phone_number = currentInfoUser.phone_number;
                }

                if (infoUser.bigAvatar) {
                    updatedInfo.avatar = infoUser.bigAvatar;
                } else {
                    updatedInfo.avatar = currentInfoUser.bigAvatar;
                }

                const data = await response.json();
                console.log('Profile updated successfully:', data);
                Swal.fire({
                    title: 'Success',
                    text: 'reset password succesfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000,
                    timerProgressBar: true,
                }).then(() => {
                    StoreReducer.dispatch(
                        authenticationAction({
                            phoneNumber: updatedInfo.phone_number,
                            fullName: updatedInfo.fullName,
                            image: updatedInfo.avatar,
                        }),
                    );

                    window.location.href = 'http://localhost:3000/trang-ca-nhan';
                });
            } else {
                const errorData = await response.json();
                console.error('Error updating profile:', errorData.message || 'Unknown error');
            }
        } catch (error) {
            console.error('Failed to send request:', error);
        }
    };
    return (
        <>
            <Header />
            <div
                className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[140px]">
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%] ">
                        {/* //item */}
                        <div className="items-center flex justify-between gap-[5rem] mx-auto max-w-[104.8rem] w-[90%]">
                            {/* //child-item */}
                            <div className="items-end flex w-[50.7%]">
                                <img
                                    className="h-auto w-[100%]"
                                    src={
                                        currentInfoUser && currentInfoUser.bigAvatar
                                            ? currentInfoUser.bigAvatar
                                            : infoUser.bigAvatar
                                    }
                                    alt=""
                                />
                            </div>
                            {/* child-item */}
                            <div className="w-[45%] gap-[30px] flex flex-col">
                                {/* // */}
                                <div>
                                    <div className="flex items-center w-[100%] gap-4">
                                        <input
                                            placeholder={currentInfoUser.name}
                                            type="text"
                                            name="name"
                                            value={infoUser.name}
                                            onChange={handleInfoUser}
                                            className="outline-none items-center flex justify-center border-none bg-transparent h-[100%] text-[72px] max-w-[100%] transition-all duration-200 mb-[10px] text-[#009383] font-bold flex-nowrap"
                                        />
                                        <span>
                                            <EditSign />
                                        </span>
                                    </div>
                                    <div className="text-left mb-[5px] text-red-600 text-[16px] font-semibold font-['Montserrat'] ">
                                        {errorInfoUser.name}
                                    </div>
                                </div>

                                {/* // */}
                                <div className="w-[100%] h-auto">
                                    <textarea
                                        name="description"
                                        value={infoUser.description}
                                        onChange={handleInfoUser}
                                        placeholder={
                                            currentInfoUser && currentInfoUser.description
                                                ? currentInfoUser.description
                                                : t('description')
                                        }
                                        className="outline-none bg-transparent py-[12px] w-[100%] h-auto min-h-[100px] transition-all duration-300 px-[16px] text-[#666] rounded-lg border border-[#009383] gap-2"
                                    />
                                    <div className="text-left mb-[5px] text-red-600 text-[16px] font-semibold font-['Montserrat'] ">
                                        {errorInfoUser.description}
                                    </div>
                                </div>
                                {/* // */}
                                <div className="flex flex-wrap gap-[1.6rem] justify-center items-center">
                                    {/* // */}
                                    {arrAvatar.map((avatar, index) => (
                                        <div
                                            key={avatar.id}
                                            className={`rounded-[50%] cursor-pointer w-[5.6rem] h-[5.6rem]  border-[#009383] ${
                                                infoUser.avatarID == avatar.id ? 'border-[4px]' : 'border-[2px]'
                                            }`}
                                            onClick={() => handleAvatarClick(avatar.id, avatar.bigAvatar)}
                                        >
                                            <img
                                                className="object-cover max-w-[100%] h-auto block"
                                                src={avatar.smallAvatar}
                                                alt={`Avatar ${avatar.id}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* // */}
                                <div className="w-[524px] h-[344px] flex-col justify-center items-start gap-5 inline-flex">
                                    <div className="self-stretch min-h-[71px] flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('phoneNumber')}
                                            </div>
                                        </div>
                                        <div className="w-[524px] h-12 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                placeholder={currentInfoUser.phone_number}
                                                type="text"
                                                name="phone_number"
                                                value={infoUser.phone_number}
                                                onChange={handleInfoUser}
                                                className="text-[#333] outline-none w-[100%]  text-[16px]"
                                            ></input>
                                        </div>
                                        <div className="text-center text-red-600 text-[16px] font-semibold font-['Montserrat'] ">
                                            {errorInfoUser.phone_number}
                                        </div>
                                    </div>
                                    <div className="self-stretch min-h-[71px] flex-col justify-start items-start gap-3 inline-flex relative">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('gender')}
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => handleOpenBirth()}
                                            className="w-[524px] h-12 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex"
                                        >
                                            <div className="text-[#929292] outline-none w-[100%] text-[16px]">
                                                {infoUser.gender || currentInfoUser.gender}
                                            </div>
                                        </div>
                                        {openBirth && (
                                            <div className="mt-2 w-[100%] absolute top-[50px] bg-white shadow-lg z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                                <div
                                                    className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                                    onClick={handleInfoUser}
                                                    data-gender="Male"
                                                >
                                                    Nam
                                                </div>
                                                <div
                                                    className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                                    onClick={handleInfoUser}
                                                    data-gender="Female"
                                                >
                                                    Nữ
                                                </div>
                                                <div
                                                    className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                                    onClick={handleInfoUser}
                                                    data-gender="Others"
                                                >
                                                    Khác
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="self-stretch min-min-h-[71px] flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('email')}
                                            </div>
                                        </div>
                                        <div className="w-[524px] h-12 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                type="text"
                                                name="email"
                                                value={infoUser.email}
                                                onChange={handleInfoUser}
                                                placeholder={currentInfoUser.email}
                                                className="text-[#333] outline-none w-[100%]  text-[16px]"
                                            ></input>
                                        </div>
                                        <div className="text-center text-red-600 text-[16px] font-semibold font-['Montserrat'] ">
                                            {errorInfoUser.email}
                                        </div>
                                    </div>

                                    <div className="self-stretch min-h-[71px] flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('dob')}
                                            </div>
                                        </div>

                                        <div className="w-[524px] h-12 flex-col justify-start items-start gap-2.5 flex">
                                            <div className="self-stretch h-12 px-4 py-2 bg-white rounded-md border border-[#b6b6b6] justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-5 justify-between items-center flex">
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <div className="justify-start items-center gap-3 flex">
                                                            <div className="justify-start items-center gap-3 flex">
                                                                <input
                                                                    type="text"
                                                                    name="dob"
                                                                    value={infoUser.dob}
                                                                    onChange={handleInfoUser}
                                                                    placeholder={currentInfoUser.dob}
                                                                    className="text-[#333] outline-none w-[100%]  text-[16px]"
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-5 h-5 relative" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center text-red-600 text-[16px] font-semibold font-['Montserrat'] ">
                                            {errorInfoUser.dob}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer mt-[70px] text-center">
                            <div
                                onClick={() => handleEditProfile()}
                                // to={'/trang-ca-nhan'}
                                className="h-12 px-[31px] py-[26px] bg-[#009383] rounded-lg mx-auto justify-center items-center gap-2.5 inline-flex"
                            >
                                <div className="text-center text-white text-[20px] font-semibold leading-normal">
                                    Xác nhận thay đổi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
