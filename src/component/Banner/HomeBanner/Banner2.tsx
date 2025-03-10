import { banner2 } from '~/assets/Images/';
function Banner2({ t }: { t: (key: string) => string }) {
    return (
        <>
            <div className="h-[1080px] relative">
                <img className="w-[100%] h-[100%]" src={banner2} alt="" />
                <div
                    className="absolute flex items-center flex-col justify-center text-center w-[45%]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <h1 className="text-[5.4rem] mb-[1.6rem] font-extrabold uppercase leading-[120%] text-[#fff]">
                        {t('tileBanner2')}
                    </h1>
                    <p className="text-[20px] text-[#fff] font-normal leading-[150%] mb-[3.2rem] text-shadown-banner2">
                        {t('contentBanner2')}
                    </p>
                    <button
                        className=" font-bold 
        text-[18px] min-w-[14.5rem] bg-[#009383] text-[#fff]
        leading-[21.09px]
        
     border-solid 
     rounded-[0.8rem] border-[1px]
     cursor-pointer
     flex justify-center items-center py-[12px] px-[1px]
     "
                    >
                        {t('learnMore')}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Banner2;
