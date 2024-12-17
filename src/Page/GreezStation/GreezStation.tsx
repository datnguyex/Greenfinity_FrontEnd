import {
    leafHomeLeft,
    leafHomeRight,
    recycleGreezStaion,
    recycleMachine,
    startRecycleApp,
    startRecycleMachine,
    qrRecycleApp,
    finishRecycleApp,
} from '~/Images';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
function GreezStation() {
    return (
        <>
            <Header></Header>
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
                        <div className="flex flex-col my-[40px] justify-center items-center">
                            <div className="text-[#333] text-[3.6rem] font-bold text-center">Cùng khám phá</div>
                            <h1 className="text-[#009383] text-[4.8rem] font-bold text-center">
                                "Hành trình tái chế và vòng đời của rác thải nhựa"
                            </h1>
                        </div>
                        {/* //item */}
                        <div className="mx-auto max-w-[86.5rem]">
                            <img src={recycleGreezStaion} alt="" />
                        </div>
                        {/* //item */}
                        <div className="flex items-center justify-center">
                            <span className="text-[4rem] font-bold text-[#009383]">Quy trình vận hành của máy</span>
                            <span className="bg-[#15bdd7] py-[9px] rounded-[0.6rem] font-bold ml-[1rem] px-[10px] uppercase border-[#e5e7eb] text-[#fff] text-[4.8rem] ">
                                RECYCLE DEPOT
                            </span>
                        </div>
                        {/* //item */}
                        <div className="mb-[140px] w-[100%] ">
                            {/* //item child*/}
                            <div className="flex justify-start w-[95rem] px-[20px] py-[40px] max-h-[24rem] mx-auto my-[32px] showdown-instruct-station rounded-[1.2rem]  items-center bg-[#fff] gap-[1.5rem]">
                                <div className="w-[25%]">
                                    <img className="object-cover w-[100%]" src={recycleMachine} alt="" />
                                </div>
                                <div className="text-[#494949] flex items-start flex-col justify-center w-[70%] gap-[5px]">
                                    <div className="text-[23px] font-bold">Bước 1: </div>
                                    <div className="text-[22px] text-[#494949]">
                                        Thu thập các loại lon nhôm và chai nhựa rỗng để bỏ vào cổng tái chế của máy.
                                    </div>
                                </div>
                            </div>

                            {/* //item child*/}
                            <div className="flex justify-start w-[95rem] px-[20px] py-[40px] max-h-[24rem] mx-auto my-[32px] showdown-instruct-station rounded-[1.2rem]  items-center bg-[#fff] gap-[1.5rem]">
                                <div className="w-[25%]">
                                    <img className="object-cover w-[100%]" src={startRecycleMachine} alt="" />
                                </div>
                                <div className="text-[#494949] flex items-start flex-col justify-center w-[70%] gap-[5px]">
                                    <div className="text-[23px] font-bold">Bước 3: </div>
                                    <div className="text-[22px] text-[#494949]">
                                        Máy sẽ hiện lên mã QR để bạn có thể tích điểm cho tài khoản cá nhân của bạn,
                                        theo đúng chiến dịch mà máy đang chạy.
                                    </div>
                                </div>
                            </div>
                            {/* //item child*/}
                            <div className="flex justify-start w-[95rem] px-[20px] py-[40px] max-h-[24rem] mx-auto my-[32px] showdown-instruct-station rounded-[1.2rem]  items-center bg-[#fff] gap-[1.5rem]">
                                <div className="w-[25%]">
                                    <img className="object-cover w-[100%]" src={qrRecycleApp} alt="" />
                                </div>
                                <div className="text-[#494949] flex items-start flex-col justify-center w-[70%] gap-[5px]">
                                    <div className="text-[23px] font-bold">Bước 4: </div>
                                    <div className="text-[22px] text-[#494949]">
                                        Máy sẽ hiện lên mã QR để bạn có thể tích điểm cho tài khoản cá nhân của bạn,
                                        theo đúng chiến dịch mà máy đang chạy.
                                    </div>
                                </div>
                            </div>
                            {/* //item child*/}
                            <div className="flex justify-start w-[95rem] px-[20px] py-[40px] max-h-[24rem] mx-auto my-[32px] showdown-instruct-station rounded-[1.2rem]  items-center bg-[#fff] gap-[1.5rem]">
                                <div className="w-[25%]">
                                    <img className="object-cover w-[100%]" src={finishRecycleApp} alt="" />
                                </div>
                                <div className="text-[#494949] flex items-start flex-col justify-center w-[70%] gap-[5px]">
                                    <div className="text-[23px] font-bold">Bước 5: </div>
                                    <div className="text-[22px] text-[#494949]">
                                        Sau khi bạn đã hoàn thành các bước thì hãy bấm “Kết thúc” máy sẽ đóng cổng tái
                                        chế lại.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* items */}
                        <div className="mt-[12rem] items-center flex flex-col justify-center pb-[120px] gap-[15px]">
                            <div className="text-[#373737] text-[3.8rem] font-semibold">Chúng ta hãy chung tay</div>
                            <div className="text-[5.4rem] uppercase font-extrabold text-[#009383]">
                                BẢO VỆ MÔI TRƯỜNG
                            </div>
                            <div className="text-[#373737] text-[4.8rem] font-semibold">
                                và nói <span className="uppercase font-[900] text-[5.5rem] text-[#009383]">KHÔNG</span>{' '}
                                với rác thải{' '}
                                <span className="uppercase font-[900] text-[5.5rem] text-[#009383]">NHỰA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GreezStation;
