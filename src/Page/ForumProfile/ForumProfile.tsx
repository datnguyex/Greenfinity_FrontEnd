import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { leafHomeLeft, leafHomeRight, ManRankAvatar } from '~/assets/Images/';
import { Link } from 'react-router-dom';
import { EditSign, HorizonTwoCircle, ListCircleAndDash } from '~/assets/Icons';
import Posts from '~/component/Posts/Posts';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FunList from '~/component/Donation/FundList/FundList';

function ForumProfile() {
    const { t } = useTranslation(['ForumProfile']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const [useFundList, setUseFundList] = useState<boolean>(false); // Specify the type here

    const disPlayFundList = (value: boolean) => {
        setUseFundList(value);
    };

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);

    return (
        <>
            <Header />
            {/* Ensure FunList is conditionally rendered properly */}
            {useFundList && <FunList disPlayFundList={disPlayFundList} t={t} />}
            <div
                className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[140px]">
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%]">
                        <div className="flex items-center justify-between gap-[5rem] mx-auto max-w-[104.8rem] w-[90%]">
                            {/* Avatar Section */}
                            <div className="flex w-[50.7%] items-end">
                                <img className="h-auto w-[100%]" src={ManRankAvatar} alt="Avatar" />
                            </div>

                            {/* Profile Information Section */}
                            <div className="w-[55%] flex flex-col gap-[20px]">
                                {/* Name Section */}
                                <span className="inline-block max-w-[100%] text-[7.2rem] font-bold leading-[8.5rem] text-[#009383]">
                                    Tuyết Anh
                                </span>

                                {/* Bio Section */}
                                <div className="h-[53px] flex-col justify-center items-start flex">
                                    <div className="text-[#373737] text-[18px] font-normal leading-tight">
                                        Tôi là người ham đọc sách, thích học hỏi và hướng ngoại. Tôi thích làm việc
                                        trong môi trường nghiêm túc và có thể phát triển sự nghiệp.
                                    </div>
                                </div>
                                {/* Edit Profile Button */}
                                <div className="w-[200px] cursor-pointer h-[48px] py-[23px] rounded-[30px] border border-[#15BDD7] flex items-center justify-center gap-2">
                                    <div
                                        onClick={() => disPlayFundList(true)}
                                        className="text-[#494949] text-[20px] font-bold flex items-center gap-2 justify-center h-[48px]"
                                    >
                                        <ListCircleAndDash />
                                        {t('fundList')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="min-h-[70px] w-[100%] p-5 bg-white rounded-3xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.05)] flex justify-between items-center gap-5">
                            <h1 className="text-[#009383] font-bold text-[28px]">{t('postsProfile')}</h1>
                            <button className="bg-[#009383] rounded-[14px] flex items-center justify-center w-[140px] h-[54px] text-[#fff] font-semibold text-[20px]">
                                <HorizonTwoCircle />
                                {t('filterPofile')}
                            </button>
                        </div>
                        <Posts t={t} />
                        <Posts t={t} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ForumProfile;
