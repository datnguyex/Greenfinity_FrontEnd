import { useEffect, useState } from 'react';
import { CloseXBlack } from '~/component/Icon';
import axios from 'axios';

type AddressFormProps = {
    type: string;
    handlelTypeDisplay: (value: string) => void;
};
function AddressForm({ type, handlelTypeDisplay }: AddressFormProps) {
    console.log('type', type);
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
    const [arrDistrict, setArrDistrict] = useState<District[]>([]);
    const [arrWards, setArrWards] = useState<Ward[]>([]);
    const [addressSpecific, setAddressSpecific] = useState('');
    const [currrentAddress, setCurrentAddress] = useState({
        provine: 'Hồ Chí Minh',
        district: 'Quận 9',
        ward: 'Tân Phú',
        addresSpecific: '183/24 Man Thiện',
    });

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
        setCurrentAddress({
            provine: '',
            district: '',
            ward: '',
            addresSpecific: '',
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
        setCurrentAddress({
            provine: '',
            district: '',
            ward: '',
            addresSpecific: '',
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
    const handleSpecificAddress = (value: any) => {
        setAddressSpecific(value);
        setCurrentAddress({
            provine: '',
            district: '',
            ward: '',
            addresSpecific: '',
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

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>
            <div className="fixed w-[586px] h-[722px]  bg-white rounded-xl mx-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
                <div
                    onClick={() => handlelTypeDisplay('new-value')}
                    className="w-6 h-6 left-[546px] top-[16px] absolute cursor-pointer"
                >
                    <CloseXBlack />
                </div>
                <div className="left-[31px] top-[40px] absolute text-[#009383] text-[32px] font-semibold leading-[38.40px]">
                    {type == 'thay-doi-dia-chi' ? 'Thay đổi địa chỉ' : 'Thêm địa chỉ'}
                </div>
                <div className="left-[31px] top-[455px] absolute flex-col justify-start items-start gap-5 inline-flex">
                    <div className="h-[67px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[16px] font-semibold font-['Roboto']">
                                Loại địa chỉ
                            </div>
                        </div>
                        <div className="justify-start items-start gap-3.5 inline-flex">
                            <div className="cursor-pointer w-[109px] h-11 py-7 px-5 bg-[#33a99c] rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="text-center text-white text-[16px] font-medium leading-tight">
                                    Công ty
                                </div>
                            </div>
                            <div className="px-5 h-11 py-7 cursor-pointer bg-[#f0f0f0] rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="text-center text-[#494949] text-[16px] font-medium leading-tight">
                                    Nhà riêng
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[255px] inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative bg-white rounded border border-[#009383]" />
                            <div className="text-[#4d4d4d] text-[16px] font-normal font-['Roboto']">
                                Đặt làm địa chỉ mặt định
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[118px] h-12 px-5 py-7 left-[234px] top-[638px] absolute cursor-pointer bg-[#009383] rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-[16px] font-semibold leading-normal">Lưu</div>
                </div>
                <div className="h-[71px] left-[31px] top-[364px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-0.5 inline-flex">
                        <div className="text-center text-[#4d4d4d] text-[16px] font-semibold font-['Roboto']">
                            Địa chỉ cụ thể
                        </div>
                    </div>
                    <div
                        onChange={(e: any) => handleSpecificAddress(e.target.value)}
                        className="w-[524px] h-12 px-4 py-2.5 bg-[#f9f8f8] rounded-lg justify-start items-center gap-2.5 inline-flex overflow-hidden"
                    >
                        <input
                            placeholder="Nhập địa chỉ cụ thể"
                            value={
                                type === 'thay-doi-dia-chi'
                                    ? currrentAddress.addresSpecific == ''
                                        ? addressSpecific
                                        : currrentAddress.addresSpecific
                                    : addressSpecific
                            }
                            className="text-[#494949] text-[16px] font-normal font-['Roboto'] outline-none w-[100%] bg-transparent"
                        />
                    </div>
                </div>
                <div className="h-[71px] left-[31px] top-[273px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-0.5 inline-flex">
                        <div className="text-center text-[#4d4d4d] text-[16px] font-semibold font-['Roboto']">
                            Chọn Phường/xã
                        </div>
                    </div>
                    <div className="w-[524px] h-12 flex-col justify-start items-start gap-2 flex cursor-pointer relative group">
                        <div className="self-stretch py-7 grow shrink basis-0 pl-4 pr-3 bg-[#f9f8f8] rounded-md border justify-between items-center inline-flex overflow-hidden">
                            <div className="text-[#494949] text-[16px] font-normal font-['Roboto']">
                                {type === 'thay-doi-dia-chi'
                                    ? ward.name !== null
                                        ? ward.name
                                        : currrentAddress.ward
                                    : ward.name !== null
                                    ? ward.name
                                    : 'Chọn Tỉnh/Thành phố'}
                            </div>
                            <div className="w-6 h-6 relative overflow-hidden" />
                        </div>

                        {/* Dropdown */}
                        <div className="absolute max-h-[200px] overflow-hidden bg-white overflow-y-auto z-[100] top-[100%] left-0 w-full mt-2 border border-[#b6b6b6] rounded-md shadow-lg hidden group-hover:block">
                            <ul className="py-2">
                                {arrWards.map((ward, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 text-[#666666] hover:bg-[#f0f0f0] cursor-pointer"
                                        onClick={() => ward.name !== null && handleWard(ward.name)}
                                    >
                                        {ward.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-[71px] left-[31px] top-[182px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-0.5 inline-flex">
                        <div className="text-center text-[#4d4d4d] text-[16px] font-semibold font-['Roboto']">
                            Chọn Quận/huyện
                        </div>
                    </div>
                    <div className="w-[524px] h-12 flex-col justify-start items-start gap-2 flex cursor-pointer relative group">
                        <div className="self-stretch py-7 grow shrink basis-0 pl-4 pr-3 bg-[#f9f8f8] rounded-md border justify-between items-center inline-flex overflow-hidden">
                            <div className="text-[#494949] text-[16px] font-normal font-['Roboto']">
                                {type === 'thay-doi-dia-chi'
                                    ? district.name !== null
                                        ? district.name
                                        : currrentAddress.district
                                    : district.name !== null
                                    ? district.name
                                    : 'Chọn Tỉnh/Thành phố'}
                            </div>
                            <div className="w-6 h-6 relative overflow-hidden" />
                        </div>

                        {/* Dropdown */}
                        <div className="absolute max-h-[200px] overflow-hidden bg-white overflow-y-auto z-[100] top-[100%] left-0 w-full mt-2 border border-[#b6b6b6] rounded-md shadow-lg hidden group-hover:block">
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
                <div className="h-[71px] left-[31px] top-[91px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-0.5 inline-flex">
                        <div className="text-center text-[#4d4d4d] text-[16px] font-semibold font-['Roboto']">
                            Chọn Tỉnh/Thành phố
                        </div>
                    </div>
                    <div className="w-[524px] h-12 flex-col justify-start items-start gap-2 flex cursor-pointer relative group">
                        <div className="self-stretch py-7 grow shrink basis-0 pl-4 pr-3 bg-[#f9f8f8] rounded-md border justify-between items-center inline-flex overflow-hidden">
                            <div className="text-[#494949] text-[16px] font-normal font-['Roboto']">
                                {type === 'thay-doi-dia-chi'
                                    ? provine.name !== null
                                        ? provine.name
                                        : currrentAddress.provine
                                    : provine.name !== null
                                    ? provine.name
                                    : 'Chọn Tỉnh/Thành phố'}
                            </div>
                            <div className="w-6 h-6 relative overflow-hidden" />
                        </div>

                        {/* Dropdown */}
                        <div className="absolute max-h-[200px] overflow-hidden bg-white overflow-y-auto z-[100] top-[100%] left-0 w-full mt-2 border border-[#b6b6b6] rounded-md shadow-lg hidden group-hover:block">
                            <ul className="py-3">
                                {arrProvines.map((provine, index) => (
                                    <li
                                        key={provine.code}
                                        className="px-4 py-2 text-[#666666] hover:bg-[#f0f0f0] cursor-pointer"
                                        onClick={() => handleProvine(provine.name, provine.code)}
                                    >
                                        {provine.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {type == 'thay-doi-dia-chi' ? (
                    <div className="left-[31px] top-[582px] absolute text-[#ff4343] text-[16px] font-normal underline cursor-pointer">
                        Xóa địa chỉ
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    );
}

export default AddressForm;
