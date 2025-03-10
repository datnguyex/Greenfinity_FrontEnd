import { AvatarWoman1, AvatarWoman2, AvatarWoman3, ManRankAvatar, OreonProduct } from '~/assets/Images/';
import { HalfAYelloStar, YellowStar } from '~/assets/Icons';
import { ThumpUp } from '~/assets/Icons/Icon';
import { Pagination } from 'antd';

function CommentProduct({ t }: { t: (key: string) => string }) {
    const reviews = [
        {
            avatar: AvatarWoman1,
            name: 'Hoài An',
            time: '12/02/2023 16:49',
            category: 'Household',
            content:
                'Mình rất hài lòng với sản phẩm này! Chất lượng vượt trội, sử dụng rất bền và tiện lợi. Tôi đã dùng được hơn 2 tháng mà vẫn thấy như mới. Sản phẩm đúng như mô tả, giao hàng nhanh chóng. Sẽ mua lại và giới thiệu cho bạn bè!',
            productImage: OreonProduct,
        },
        {
            avatar: AvatarWoman2, // Đổi ảnh đại diện nếu cần
            name: 'Nguyễn Lý',
            time: '10/11/2023 18:30',
            category: 'Electronics',
            content:
                'Sản phẩm tốt, chất liệu đẹp và chắc chắn. Tuy nhiên, tôi hy vọng có thêm vài màu sắc lựa chọn để phù hợp hơn với sở thích cá nhân. Nhưng nhìn chung, tôi rất hài lòng về hiệu suất và thiết kế của sản phẩm.',
            productImage: OreonProduct,
        },
        {
            avatar: AvatarWoman3, // Đổi ảnh đại diện nếu cần
            name: 'Minh Tuấn',
            time: '15/12/2023 14:20',
            category: 'Clothing',
            content:
                'Sản phẩm sử dụng ổn, nhưng mình gặp phải chút vấn đề với kích thước không vừa như mong muốn. Gửi lại đổi thì hơi mất thời gian. Chất lượng khá ổn nhưng dịch vụ hỗ trợ khách hàng cần cải thiện hơn',
            productImage: OreonProduct,
        },
    ];
    return (
        <>
            <div className="text-[#009383] text-[36px] font-bold uppercase leading-[43.20px] text-center mt-[150px] mb-[40px]">
                {t('productReviews')};
            </div>
            <div className="w-[1440px] h-[1173px] px-[124px] pt-[47px] pb-9 bg-white rounded-2xl shadow-[0px_0px_20px_0px_rgba(113,113,113,0.15)] flex-col justify-start items-start gap-11 flex overflow-hidden">
                <div className="h-[117px] justify-start items-center gap-[76px] inline-flex">
                    <div className="w-[346px] h-[117px] relative">
                        <div className="left-[160px] t top-[72px] absolute text-[#009383] text-[17px] font-medium ">
                            {t('over')} 500 {t('reviews')}
                        </div>
                        <div className="left-0 top-0 absolute text-[#009383] text-[100px] font-bold ">4.5</div>
                        <div className="w-[186px] h-8 left-[128px] top-[38px] absolute justify-center items-start gap-[7px] inline-flex">
                            <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                <YellowStar />
                            </div>
                            <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                <YellowStar />
                            </div>
                            <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                <YellowStar />
                            </div>
                            <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                <YellowStar />
                            </div>
                            <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                <HalfAYelloStar />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-center flex-col gap-[10px]">
                        <div className=" justify-start items-start gap-[18px] flex">
                            <div className="px-6 cursor-pointer py-2.5 bg-[#006e62] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-white text-[17px] font-bold cursor-pointer">{t('all')}</div>
                            </div>

                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold ">5 {t('star')} (83)</div>
                            </div>

                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold ">4 {t('star')} (4)</div>
                            </div>
                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold ">3 {t('star')} (0)</div>
                            </div>
                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold ">2 {t('star')} (10)</div>
                            </div>
                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold ">1 {t('star')} (0)</div>
                            </div>
                        </div>
                        <div className=" justify-start items-start gap-[18px] flex">
                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold ">
                                    {t('withPicturesVideos')} (44)
                                </div>
                            </div>
                            <div className="px-6 cursor-pointer py-2.5 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-[#009383] text-[17px] font-bold "> {t('withComments')} (30)</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //item */}
                {reviews.map((review, index) => (
                    <div className="h-[263px] relative border-b border-[#b6b6b6] w-[1124px]">
                        <div key={index} className="relative mb-4 ">
                            <div className="left-[68px] top-[228px] absolute justify-start items-center gap-2 inline-flex">
                                <div className="text-[#006e62] text-[17px] font-medium flex items-center justify-center gap-2 cursor-pointer">
                                    <ThumpUp />
                                    {t('like')}
                                </div>
                            </div>
                            <div className="w-[1070px] left-[68px] top-[98px] absolute text-[#121212] text-[17px] font-normal leading-none">
                                {review.content}
                            </div>
                            <div className="w-[50px] h-[50px] rounded-[100px] border bg-[#006e62]">
                                <img src={review.avatar} alt="" />
                            </div>
                            <div className="left-[68px] top-[7px] absolute flex-col justify-start items-start gap-3 inline-flex">
                                <div className="text-[#006e62] text-[19px] font-bold ">{review.name}</div>
                                <div className="w-[100px] h-[17px] justify-center items-start gap-[3.76px] inline-flex">
                                    {/* Star Rating */}
                                    <div className="w-[186px] h-8 ml-[12px] justify-center items-start gap-[7px] inline-flex">
                                        <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                            <YellowStar />
                                        </div>
                                        <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                            <YellowStar />
                                        </div>
                                        <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                            <YellowStar />
                                        </div>
                                        <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                            <YellowStar />
                                        </div>
                                        <div className="w-8 h-8 relative flex-col justify-start items-start flex">
                                            <HalfAYelloStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left-[68px] top-[56px] w-[450px] absolute justify-start items-center gap-2 inline-flex">
                                <div className="text-[#494949] text-[17px] font-normal leading-none">{review.time}</div>
                                <div className="justify-start items-center gap-2 flex">
                                    <div className="text-[#494949] text-[17px] font-normal leading-none">
                                        {t('productClassification')}:
                                    </div>
                                    <div className="px-2 py-1 bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] flex">
                                        <div className="text-[#9644ff] text-[15px] font-medium ">{review.category}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[75px] h-[75px] left-[68px] top-[139px] absolute bg-white rounded border border-[#009383]  overflow-hidden">
                                <img className="w-[100%] h-[100%] object-cover" src={review.productImage} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mx-auto text-center mt-[40px]">
                    <Pagination defaultCurrent={1} total={30} className="flex justify-center ant-paginate-contribute" />
                </div>
            </div>
        </>
    );
}

export default CommentProduct;
