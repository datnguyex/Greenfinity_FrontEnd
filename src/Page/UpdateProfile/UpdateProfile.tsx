import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { leafHomeLeft, leafHomeRight } from '~/Images';
import { ManRankAvatar, AvatarMan2, AvatarWoman1, AvatarWoman2, AvatarWoman3, AvatarWoman4 } from '~/Images';
import { EditSign } from '~/component/Icon';
import { useState } from 'react';
import { RoundedMan1, RoundedMan2, RoundedWoman1, RoundedWoman2, RoundedWoman3, RoundedWoman4 } from '~/Images';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Profile() {
    const { t } = useTranslation(['updateProfile']);

    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    const [infoUser, setInfoUser] = useState({
        name: 'Nguyễn Thành Đạt',
        gender: 'male',
        avatarID: 1,
        bigAvatar: ManRankAvatar,
    });
    const handleInfoUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Update the state with the new value
        setInfoUser((prevInfoUser) => ({
            ...prevInfoUser,
            [name]: value, // This will update either 'name' or 'gender'
        }));
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
            bigAvatar: AvatarWoman2,
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
    };
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
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
                                <img className="h-auto w-[100%]" src={infoUser.bigAvatar} alt="" />
                            </div>
                            {/* child-item */}
                            <div className="w-[45%] gap-[30px] flex flex-col">
                                {/* // */}
                                <div className="flex items-center w-[100%] gap-4">
                                    <input
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

                                {/* // */}
                                <textarea
                                    placeholder={t('description')}
                                    className="outline-none bg-transparent py-[12px] max-w-[100%] h-auto min-h-[100px] transition-all duration-300
                                 px-[16px] text-[#666] rounded-lg border border-[#009383] gap-2"
                                ></textarea>
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
                                    <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('fullname')}
                                            </div>
                                        </div>
                                        <div className="w-[524px] h-12 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                placeholder="Nguyễn Thành Đạt"
                                                className="text-[#333] outline-none w-[100%]  text-[16px]"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('phoneNumber')}
                                            </div>
                                        </div>
                                        <div className="w-[524px] h-12 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                placeholder="0329169799"
                                                className="text-[#333] outline-none w-[100%]  text-[16px]"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-start gap-0.5 inline-flex">
                                            <div className="text-center text-[#333] text-[16px] font-semibold font-['Montserrat']">
                                                {t('email')}
                                            </div>
                                        </div>
                                        <div className="w-[524px] h-12 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                placeholder="nnguyendat72@gmail.com"
                                                className="text-[#333] outline-none w-[100%]  text-[16px]"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 inline-flex">
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
                                                                    placeholder="18/12/2024"
                                                                    className="text-[#333] outline-none w-[100%]  text-[16px]"
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-5 h-5 relative" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer mt-[70px] text-center">
                            <div className="h-12 px-[31px] py-[26px] bg-[#009383] rounded-lg mx-auto justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-[20px] font-semibold font-['Roboto'] leading-normal">
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
