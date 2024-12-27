import { leafHomeLeft, leafHomeRight } from '~/Images';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { MoMoLogo, VNPayLogo, SharkProduct } from '~/Images';
import { Bin, LeafCateProduct } from '~/component/Icon';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFetcher } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function ShippingInfomation() {
    const { t } = useTranslation(['shippingInfomation']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    const [shipInfo, setShipInfo] = useState({
        type: true,
        name: '',
        address: '',
        phoneNumber: '',
        city: '',
        district: '',
        ward: '',
        note: '',
        typePayment: '',
        saveAddress: false,
    });
    type Provinces = {
        name: string;
        code: number;
        division_type: string;
        codename: string;
        phone_code: number;
    };
    type Province = {
        name: string | null;
        code: number | null;
    };
    type Ward = {
        code: number | null;
        codename: string | null;
        district_code: number | null;
        division_type: string | null;
        name: string | null;
    };
    type District = {
        code: number | null;
        code_name: string | null; // Changed to string, assuming that's more appropriate
        name: string | null;
        provine_code: number | null;
        wards: Ward[]; // Changed to an array of wards
    };

    const [arrProvines, setarrProvinces] = useState<Provinces[]>([]);
    const [provine, setProvine] = useState<Province>({
        name: null,
        code: null,
    });
    const [district, setDistrict] = useState<District>({
        code: null,
        code_name: null,
        name: null,
        provine_code: null,
        wards: [],
    });
    const [ward, setWard] = useState<Ward>({
        code: null,
        codename: null,
        district_code: null,
        division_type: null,
        name: null,
    });
    const [arrDistrict, setArrDistrict] = useState<District[]>([]);
    const [arrWards, setArrWards] = useState<Ward[]>([]);

    const products = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ];
    const handleTypeChange = (e: any) => {
        setShipInfo({
            ...shipInfo,
            type: e,
        });
    };
    const fetchProvinces = async () => {
        try {
            const response = await axios.get('https://provinces.open-api.vn/api/p');
            setarrProvinces(response.data);
        } catch (error) {
            console.error('Error fetching provinces', error);
        }
    };
    const fetchDistrict = async () => {
        try {
            const response = await axios.get(`https://provinces.open-api.vn/api/p/${provine.code}?depth=3`);
            setArrDistrict(response.data.districts);
        } catch (error) {
            console.error('Error fetching provinces', error);
        }
    };
    const handleProvine = (name: string, code: number) => {
        setProvine({
            name: name,
            code: code,
        });
        setDistrict({
            code: null,
            code_name: null,
            name: null,
            provine_code: null,
            wards: [],
        });
        setWard({
            code: null,
            codename: null,
            district_code: null,
            division_type: null,
            name: null,
        });
    };
    const handleDistrict = (name: string, code: number) => {
        setDistrict({
            name: name,
            code: code,
            code_name: null,
            provine_code: null,
            wards: [],
        });
        setWard({
            code: null,
            codename: null,
            district_code: null,
            division_type: null,
            name: null,
        });
    };
    const handleWard = (name: string) => {
        setWard({
            code: null,
            codename: null,
            district_code: null,
            division_type: null,
            name: name,
        });
    };

    // console.log('district', district);
    // console.log('wards', arrWards);

    useEffect(() => {
        const wardsWithDistrictCode1 = arrDistrict.flatMap((dis) =>
            dis.wards.filter((ward) => ward.district_code === district.code),
        );
        setArrWards(wardsWithDistrictCode1);
    }, [district]);
    useEffect(() => {
        fetchProvinces();
    }, []);
    useEffect(() => {
        fetchDistrict();
    }, [provine]);
    useEffect(() => {}, []);
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
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%]">
                        <div className="flex justify-center gap-[20px]">
                            {/* //block */}
                            <div className="w-[50%] flex flex-col gap-[10px]">
                                {/* //item */}
                                <div className="h-[115px] w-[100%] mb-[20px] bg-[#d6f2ef] rounded-xl justify-start items-center inline-flex overflow-hidden">
                                    <div className="self-h-[100%] stretch px-[25px] flex-col justify-start items-start gap-6 w-[100%] inline-flex">
                                        <div className="text-[#006e62] text-[30px] font-semibold w-[100%]">
                                            Hi, Huy Nguyen
                                        </div>
                                        <div>
                                            <span className="text-[#494949] text-[17px] font-normal leading-tight">
                                                {t('totalProduct')} (2 {t('product')})
                                            </span>
                                            <span className="text-[#494949] text-[17px] font-medium leading-tight">
                                                {' '}
                                            </span>
                                            <span className="text-[#009383] text-[17px] font-semibold leading-tight">
                                                1.600.00đ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* //item */}
                                <div className="text-[#373737] text-[32px] font-semibold font-['Roboto']">
                                    {t('title')}
                                </div>
                                {/* //item */}
                                <div className="flex-col justify-start items-start gap-7 inline-flex w-[100%]">
                                    <div className="justify-start items-start gap-[18px] inline-flex">
                                        <div
                                            className="justify-start items-center gap-2 flex cursor-pointer"
                                            onClick={() => handleTypeChange(false)}
                                        >
                                            {shipInfo.type == false ? (
                                                <div className="w-[28.80px] h-[28.80px] p-[4.32px] bg-white rounded-[28.80px] border border-[#009383] justify-center items-center flex overflow-hidden">
                                                    <div className="w-[20.16px] h-[20.16px] relative bg-[#009383] rounded-[28.80px]" />
                                                </div>
                                            ) : (
                                                <div className="w-[28.80px] h-[28.80px] relative bg-white rounded-[28.80px] border border-[#929292]" />
                                            )}
                                            <div className="text-[#505050] text-[17px] font-medium font-['Roboto']">
                                                {t('default')}
                                            </div>
                                        </div>
                                        <div
                                            className="justify-start items-center gap-2 flex cursor-pointer"
                                            onClick={() => handleTypeChange(true)}
                                        >
                                            {shipInfo.type == true ? (
                                                <div className="w-[28.80px] h-[28.80px] p-[4.32px] bg-white rounded-[28.80px] border border-[#009383] justify-center items-center flex overflow-hidden">
                                                    <div className="w-[20.16px] h-[20.16px] relative bg-[#009383] rounded-[28.80px]" />
                                                </div>
                                            ) : (
                                                <div className="w-[28.80px] h-[28.80px] relative bg-white rounded-[28.80px] border border-[#929292]" />
                                            )}
                                            <div className="text-[#505050] text-[17px] font-medium font-['Roboto']">
                                                {t('other')}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="self-stretch h-18 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                                        <input
                                            className="text-[#494949]  text-[17px] font-medium outline-none w-[100%]"
                                            placeholder={t('fullname')}
                                        ></input>
                                    </div>
                                    <div className="self-stretch justify-start items-start gap-6 inline-flex w-[100%]">
                                        <div className="w-[100%] h-18 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 flex overflow-hidden">
                                            <input
                                                className="text-[#494949] text-[17px] font-normal outline-none w-[100%]"
                                                placeholder={t('address')}
                                            ></input>
                                        </div>
                                        <div className="w-[100%] h-18 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 flex overflow-hidden">
                                            <input
                                                className="text-[#494949] text-[17px] font-normal outline-none w-[100%]"
                                                placeholder={t('phoneNumber')}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                                        {/* //thanh pho */}
                                        <div className="w-[30%]">
                                            <div className="w-[100%] h-14 bg-white flex-col justify-start items-start gap-2 inline-flex relative">
                                                <div className="self-stretch grow shrink basis-0 pl-4 pr-3 bg-white rounded-md border border-[#b6b6b6] justify-between items-center inline-flex overflow-hidden group">
                                                    <div className="text-[#666666] text-[17px] font-medium cursor-pointer group-hover:text-[#000]">
                                                        <div>
                                                            {provine.name !== null ? provine.name : t('province')}
                                                        </div>
                                                    </div>
                                                    <div className="absolute max-h-[200px] overflow-hidden overflow-y-auto top-[100%] left-0 w-full mt-2 bg-white border border-[#b6b6b6] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                                                        <ul className="py-2">
                                                            {arrProvines.map((provine, index) => (
                                                                <li
                                                                    className="px-4 py-2 text-[#666666] hover:bg-[#f0f0f0] cursor-pointer"
                                                                    onClick={() =>
                                                                        handleProvine(provine.name, provine.code)
                                                                    }
                                                                >
                                                                    {provine.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* // quan huyen */}
                                        <div className="w-[30%]">
                                            <div className="w-[100%] h-14 bg-white flex-col justify-start items-start gap-2 inline-flex relative">
                                                <div className="self-stretch grow shrink basis-0 pl-4 pr-3 bg-white rounded-md border border-[#b6b6b6] justify-between items-center inline-flex overflow-hidden group">
                                                    <div className="text-[#666666] text-[17px] font-medium cursor-pointer group-hover:text-[#000]">
                                                        {district.name !== null ? district.name : t('district')}
                                                    </div>
                                                    <div className="absolute top-[100%] max-h-[200px] overflow-hidden overflow-y-auto left-0 w-full mt-2 bg-white border border-[#b6b6b6] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                                                        <ul className="py-2">
                                                            {arrDistrict.map((district, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="px-4 py-2 text-[#666666] hover:bg-[#f0f0f0] cursor-pointer"
                                                                    onClick={() =>
                                                                        district.name !== null &&
                                                                        district.code &&
                                                                        handleDistrict(district.name, district.code)
                                                                    }
                                                                >
                                                                    {district.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* //phuong xa */}
                                        <div className="w-[30%]">
                                            <div className="w-[100%] h-14 bg-white flex-col justify-start items-start gap-2 inline-flex relative">
                                                <div className="self-stretch grow shrink basis-0 pl-4 pr-3 bg-white rounded-md border border-[#b6b6b6] justify-between items-center inline-flex overflow-hidden group">
                                                    <div className="text-[#666666] text-[17px] font-medium cursor-pointer group-hover:text-[#000]">
                                                        {ward.name !== null ? ward.name : t('ward')}
                                                    </div>
                                                    <div className="absolute max-h-[200px] overflow-hidden overflow-y-auto  top-[100%] left-0 w-full mt-2 bg-white border border-[#b6b6b6] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                                                        <ul className="py-2">
                                                            {arrWards.map((ward, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="px-4 py-2 text-[#666666] hover:bg-[#f0f0f0] cursor-pointer"
                                                                    onClick={() =>
                                                                        ward.name !== null && handleWard(ward.name)
                                                                    }
                                                                >
                                                                    {ward.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[84px] flex-col justify-start items-start gap-6 flex">
                                        <div className="w-[100%] h-18 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                                            <input
                                                className="text-[#929292] text-[17px] font-normal outline-none w-[100%]"
                                                placeholder={t('note')}
                                            ></input>
                                        </div>
                                        <div className="justify-start items-center gap-[255px] inline-flex">
                                            <div className="justify-start items-center gap-2 flex">
                                                <input
                                                    type="checkbox"
                                                    className="appearance-none relative rounded w-[20px] h-[20px] border-[1px] border-solid border-[#009383] checked:bg-[#009383]"
                                                />
                                                <div className="text-[#494949] text-[17px] font-normal leading-normal">
                                                    {t('save')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* //item */}
                                <div className="text-[#373737] text-[32px] font-semibold  mt-[20px]">
                                    {t('paymentMethod')}
                                </div>
                                {/* //item */}
                                <div className="h-[72px] justify-start items-start gap-6 inline-flex w-[100%">
                                    <div className="cursor-pointer h-[100%] grow shrink basis-0 self-stretch px-4 py-3 bg-white rounded-xl border border-[#b6b6b6] justify-start items-center gap-2.5 flex overflow-hidden">
                                        <div className="w-auto h-[100%] justify-center items-center flex">
                                            <img className="w-auto h-[100%]" src={MoMoLogo} />
                                        </div>
                                        <div className="grow shrink basis-0 text-[#384252] text-[17px] font-medium font-['Roboto']">
                                            {t('wallet')} MOMO
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 relative  overflow-hidden" />

                                    <div className="cursor-pointer h-[100%] grow shrink basis-0 self-stretch px-4 py-3 bg-white rounded-xl border border-[#b6b6b6] justify-start items-center gap-2.5 flex overflow-hidden">
                                        <div className="w-auto h-[100%] justify-center items-center flex">
                                            <img className="w-auto h-[100%]" src={VNPayLogo} />
                                        </div>
                                        <div className="grow shrink basis-0 text-[#384252] text-[17px] font-medium font-['Roboto']">
                                            {t('wallet')} VNPAY
                                        </div>
                                    </div>
                                </div>
                                {/* //item */}
                                <div className="cursor-pointer h-18 px-6 py-[15px] bg-[#009383] rounded-lg text-center overflow-hidden  mt-[12px]">
                                    <div className="text-white text-[17px] font-bold font-['Roboto']">
                                        {t('payment')} 1.800.00đ (MoMo)
                                    </div>
                                </div>
                            </div>
                            {/* //block */}
                            <div className="flex-1">
                                {/* item */}
                                <div>
                                    <div className="h-[30px] justify-between items-center inline-flex">
                                        <div className="text-[#373737] text-[32px] font-semibold font-['Roboto]'">
                                            {t('cart')}
                                        </div>
                                        <div className="w-[30px] h-[30px] p-[1.25px] justify-center items-center flex">
                                            <div className="w-[27.50px] h-[27.50px] relative flex-col justify-start items-start flex overflow-hidden" />
                                        </div>
                                    </div>
                                </div>
                                {/* item */}
                                <div className="h-[457px] p-6 bg-white rounded-2xl border mt-[20px] border-[#009383] flex-col justify-start items-start gap-4 inline-flex overflow-hidden  overflow-y-auto">
                                    {products.map(() => (
                                        <div className="bg-white rounded-lg justify-start items-center gap-4 inline-flex">
                                            <div className="w-[150px] h-[118px] bg-[#eceef0] rounded-xl justify-center items-center flex overflow-hidden">
                                                <img className="w-auto h-[118px]" src={SharkProduct} />
                                            </div>
                                            <div className="h-[79px] justify-between items-center flex">
                                                <div className="w-[299px] flex-col justify-start items-start gap-3 inline-flex">
                                                    <div className="self-stretch text-[#373737] text-[18px] font-semibold leading-normal">
                                                        Multipurpose container Shark
                                                    </div>
                                                    <div className="h-7 px-2 py-4 bg-[#dde6ff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                        <LeafCateProduct />
                                                        <div className="text-[#0084ff] text-[14px] font-medium font-['Roboto']">
                                                            Art toy
                                                        </div>
                                                    </div>
                                                    <div className="justify-start items-start gap-3 inline-flex">
                                                        <div className="text-[#929292] text-[20px] font-normal line-through leading-relaxed">
                                                            900.000đ
                                                        </div>
                                                        <div className="text-[#009383] text-[20px] font-semibold leading-relaxed">
                                                            800.000đ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="justify-start items-center gap-2.5 flex">
                                                    <span className="text-[#494949] text-[15px] font-normal font-['Roboto']">
                                                        {t('quantitu')}:{' '}
                                                    </span>
                                                    <span className="text-[#006e62] text-[15px] font-semibold font-['Roboto']">
                                                        1
                                                    </span>
                                                    <div className="w-6 h-6 relative flex items-center justify-center cursor-pointer">
                                                        {<Bin />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* //item */}
                                <div className="h-[276px] flex-col justify-start items-start gap-4 inline-flex">
                                    <div className="justify-between w-[100%] items-start gap-6 inline-flex my-[15px]">
                                        <div className="w-[468px] h-18 px-4 py-2.5 bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 flex overflow-hidden">
                                            <input
                                                className="text-[#494949] text-[16px] font-normal outline-none w-[100%] h-[100%]"
                                                placeholder={t('InputDiscount')}
                                            ></input>
                                        </div>
                                        <div className="px-6 py-2.5 bg-[#d9d9d9] rounded-lg justify-center items-center gap-2 flex overflow-hidden cursor-pointer">
                                            <div className="text-[#929292] text-[16px] font-semibold font-['Roboto']">
                                                {t('apply')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[600px] h-[212px] relative bg-white rounded-xl border border-[#b6b6b6]">
                                        <div className="left-[25px] top-[24px] absolute text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            {t('provisional')}
                                        </div>
                                        <div className="left-[25px] top-[61px] absolute text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            {t('discount')}
                                        </div>
                                        <div className="left-[25px] top-[98px] absolute text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            {t('shippingFee')}
                                        </div>
                                        <div className="left-[494px] top-[24px] absolute text-right text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            1.800.000đ
                                        </div>
                                        <div className="left-[556px] top-[61px] absolute text-right text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            0đ
                                        </div>
                                        <div className="left-[556px] top-[98px] absolute text-right text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            0đ
                                        </div>
                                        <div className="w-[550px] h-[0px] left-[25px] top-[147px] absolute border border-[#b6b6b6]"></div>
                                        <div className="left-[25px] top-[165px] absolute text-right text-[#494949] text-[16px] font-semibold font-['Roboto']">
                                            {t('totalPrice')}
                                        </div>
                                        <div className="left-[481px] top-[165px] absolute text-right text-[#009383] text-[19px] font-bold font-['Roboto']">
                                            1.800.00đ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShippingInfomation;
