import imgTitleWeb from '../../Images/imgTitleWeb.webp';
import flowerUp from '../../Images/flowerUp.png';
import flowerDown from '../../Images/flowerDown.png';
import { useState } from 'react';

function Login() {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#CCE9E6] flex justify-center items-center">
                <div className="w-[605px] h-[582px] rounded-3xl bg-white relative">
                    <img className="absolute rotate-[0deg] w-[130px] h-[130px] ml-[5px]" src={flowerDown} alt="" />
                    <img className="w-[454px] h-[71px] mx-auto mt-[68px] sticky" src={imgTitleWeb} alt="" />

                    <div className="flex justify-center gap-5 mt-20">
                        <span className="text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383] font-bold text-[20px] leading-6 text-underline-offset-4 cursor-pointer">
                            ĐĂNG NHẬP
                        </span>
                        <span className="font-bold text-[20px] leading-6 text-[#888888] cursor-pointer">ĐĂNG KÝ</span>
                    </div>
                    <div className="flex justify-center mt-20">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-[16px] leading-6 font-medium text-[#494949]">Số điện thoại:</p>
                            <input
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="text"
                                name=""
                                id=""
                                placeholder="Nhập số điện thoại của bạn"
                            />
                        </div>
                    </div>
                    <img src={flowerUp} alt="" className="absolute w-[110.6px] h-[186.43px] right-0 bottom-[60px]" />
                    <div className="flex justify-center">
                        <button className="mt-72 bg-[#009383] text-[#FFFFFF] text-[18px] leading-['21.78px'] font-semibold rounded-[8px] w-[505px] h-[48px]">
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
