import React from 'react';

// Define the type for the props
interface StoreBannerProps {
    image: string; // The image prop will be a string (URL of the image)
    title: string; // The title will be a string
    subTitle: string; // The subTitle will also be a string
}

const StoreFlowerBanner: React.FC<StoreBannerProps> = ({ image, title, subTitle }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between items-center pt-[50px] gap-[100px]">
                <div className="pl-[200px]">
                    <div className="text-[#006e62] text-[50px] font-semibold capitalize leading-[65px]">
                        {title} {/* Use the title prop */}
                    </div>
                    <div className="text-[#006e62] text-[120px] font-extrabold uppercase leading-[156px]">
                        {subTitle} {/* Use the subTitle prop */}
                    </div>
                    <div className="w-[707px] h-[180px] text-[#494949] text-[16px] font-normal leading-tight">
                        Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus turpis malesuada
                        egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo volutpat arcu massa. Scelerisque
                        vestibulum tellus rhoncus arcu blandit sem auctor donec. Vulputate quis dis mauris a id. Blandit
                        porta et libero at elit vitae. Tincidunt mi eget tristique vestibulum dolor nulla nascetur
                        tellus non. Elementum justo eget odio non ornare. Cursus habitant nisi ac aliquam. Cras nibh
                        dictumst consequat enim et sit et quam. A cras varius non rhoncus congue. Varius amet id
                        ultricies pellentesque morbi pharetra turpis. Adipiscing pharetra mollis ornare sit nibh. Amet
                        sagittis tellus ut scelerisque dolor auctor. Libero justo pellentesque pulvinar dolor...{' '}
                    </div>
                    <div className="w-[219px] h-[54px] px-6 py-2.5 bg-[#009383] rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden">
                        <div className="text-white text-[26px] font-bold font-['Roboto']">Mua ngay</div>
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <div className="w-[750px] h-[750px] relative bg-[#99d4cd] rounded-full">
                        <div className="absolute left-[-100px] w-[62%] bottom-[-30px]">
                            <img src={image} alt={title} /> {/* Use the image prop */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreFlowerBanner;
