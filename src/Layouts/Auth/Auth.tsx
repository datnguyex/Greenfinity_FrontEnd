import { ReactNode } from 'react';
import { flowerDown, flowerUp, imgTitleWeb } from '~/assets/Images';
import { AuthLayoutProps } from '~/Types/AuthType';

function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="w-[100vw] h-[100vh] bg-[#CCE9E6] flex justify-center items-center">
            <div className="w-[32%] max-w-[32%] pb-[20px] min-h-[75%] rounded-3xl bg-white relative">
                <img className="absolute rotate-[0deg] w-[25%] h-[25%] ml-[5px]" src={flowerDown} alt="" />
                <img className="w-[75%] max-h-28 mx-auto mt-[68px] sticky" src={imgTitleWeb} alt="" />
                {children}
                <img src={flowerUp} alt="" className="absolute w-[15%] h-[25%] right-0 bottom-[10%] z-[10] " />
            </div>
        </div>
    );
}

export default AuthLayout;
