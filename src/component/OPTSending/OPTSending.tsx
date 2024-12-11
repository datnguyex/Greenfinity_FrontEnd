import classNames from 'classnames/bind';
// import style from './Login.module.scss';
import imgTitleWeb from '../../Images/imgTitleWeb.webp';
import flowerUp from '../../Images/flowerUp.png';
import flowerDown from '../../Images/flowerDown.png';
import { useState } from 'react';
// const cx = classNames.bind(style);
function OPTSending() {
    const [optValid, setOptValid] = useState(false);
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#CCE9E6] flex justify-center items-center">
                <div className="w-[605px] h-[582px] rounded-3xl bg-white relative">
                    <img className="absolute rotate-[0deg] w-[130px] h-[130px] ml-[5px]" src={flowerDown} alt="" />
                    <img className="w-[454px] h-[71px] mx-auto mt-[68px] sticky" src={imgTitleWeb} alt="" />
                    <div className="flex justify-center items-center">
                        <div className="border-b-2 border-[#009383] inline-block pb-[10px]">
                            <h6 className="mt-[50px] text-[20px] leading-6 text-[#009383] font-bold">NHẬP OTP</h6>
                        </div>
                    </div>

                    <p className="mt-[40px] text-center text-[16px] leading-6 font-medium text-[#494949]">
                        Một mã OTP vừa được gửi vào số 0329169799
                    </p>
                    <div className="mt-6 flex justify-center items-center">
                        <div className="flex flex-row gap-4">
                            <div
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <p className="font-normal text-[18px] leading-[27px] text-[#494949]">5</p>
                            </div>
                            <div
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <p className="font-normal text-[18px] leading-[27px] text-[#494949]">5</p>
                            </div>
                            <div
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <p className="font-normal text-[18px] leading-[27px] text-[#494949]">5</p>
                            </div>
                            <div
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <p className="font-normal text-[18px] leading-[27px] text-[#494949]">5</p>
                            </div>
                            <div
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <p className="font-normal text-[18px] leading-[27px] text-[#494949]">5</p>
                            </div>
                            <div
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <p className="font-normal text-[18px] leading-[27px] text-[#494949]">5</p>
                            </div>
                        </div>
                    </div>
                    {optValid ? (
                        <></>
                    ) : (
                        <div className="mt-6 flex justify-center">
                            <span className="text-[#FF0000] leading-[21px] text-[14px] font-normal">
                                Mã OTP không hợp lệ
                            </span>
                        </div>
                    )}

                    <div className="mt-6 flex justify-center items-center font-normal text-[16px] leading-6">
                        <span className="text-gray-700">Thời gian còn lại:</span>
                        <span className="opacity-0 pointer-events-none">a</span>
                        <span className="text-[#009383]">5 phút 00 giây</span>
                    </div>
                    <img src={flowerUp} alt="" className="absolute w-[110.6px] h-[186.43px] right-0 bottom-[60px]" />
                    <div
                        className={`font-medium text-[16px] leading-6 flex items-center justify-center gap-2 ${
                            optValid ? 'mt-40' : 'mt-[64.5px]'
                        }`}
                    >
                        <span className="text-[#494949]">Bạn chưa nhận được mã?</span>
                        <span
                            className={
                                'text-underline-offset-4 cursor-pointer text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383'
                            }
                        >
                            Gửi lại mã
                        </span>
                    </div>

                    <div className="mt-12 flex items-center justify-center ">
                        <button className="size-[18px] font-semibold leading-[21.78px] text-white w-[505px] h-[48px] bg-[#009383] rounded-lg">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OPTSending;
