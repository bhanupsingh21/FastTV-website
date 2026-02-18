import { assets } from '../assets/figma_assets';

export default function DownloadSection() {
    return (
        <section className="relative w-full h-[390px] overflow-hidden shrink-0 my-12" data-name="download_app">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "linear-gradient(80.2845deg, rgb(11, 42, 54) 48.252%, rgb(17, 66, 85) 73.605%, rgb(11, 42, 54) 87.186%)"
                }}
            />

            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay">
                <img src={assets.imgImage265} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Center Image (Added from Figma) - Compount Phone Mockup */}
            {/* Adjusted for mobile: Hidden on small screens or positioned differently if needed. 
                For now, we'll keep it absolute but adjust position/scale for mobile to sit behind text or hide if it overlaps too much.
                Actually, let's hide it on mobile (< md) to keep the text readable, or move it to bottom right.
            */}
            <div className="hidden md:block absolute left-[80%] md:left-[60%] -translate-x-1/2 top-[24px] w-[396px] h-[616px] z-20 pointer-events-none scale-[0.65] sm:scale-[0.8] md:scale-[0.95] origin-top">
                <div className="relative w-full h-full">
                    {/* Base Layer */}
                    <div className="absolute left-[36px] top-[44px] w-[287px] h-[573px] z-10">
                        <img src={assets.imgImage262} alt="" className="w-full h-full object-contain" />
                    </div>
                    {/* Screen Content */}
                    <div className="absolute left-[52px] top-[56px] w-[255px] h-[528px] rounded-[34px] overflow-hidden z-20">
                        <img src={assets.imgPoster4CopyHor1} alt="App Screen" className="w-[505%] max-w-none h-[142%] object-cover -ml-[259%] -mt-[17%]" />
                    </div>
                    {/* Phone Frame Overlay */}
                    <div className="absolute left-0 top-0 w-full h-full z-30">
                        <img
                            src={assets.imgImage264}
                            alt="App Preview"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-8 md:py-0">

                {/* Left Text Content */}
                <div className="flex flex-col gap-6 md:gap-8 max-w-full md:max-w-[500px] lg:max-w-[600px] z-10 text-center md:text-left items-center md:items-start">
                    <div className="flex flex-col gap-3 md:gap-5 text-white">
                        <h2 className="text-3xl md:text-[39px] font-bold leading-tight">
                            Ready toStart?
                        </h2>
                        <div className="text-base md:text-[21px] opacity-80 leading-normal">
                            <p>From forbidden love to family betrayal. From quiet heartbreak to powerful revenge. Every story unfolds in 90–120 seconds -short enough for your break, deep enough to stay with you</p>
                        </div>
                    </div>

                    {/* Store Buttons */}
                    <div className="flex gap-3">
                        <button className="h-[45px] w-[150px] md:h-[59px] md:w-[200px] hover:opacity-90 transition-opacity">
                            <img src={assets.img1} alt="App Store" className="h-full w-full object-contain" />
                        </button>
                        <button className="h-[45px] w-[150px] md:h-[59px] md:w-[200px] hover:opacity-90 transition-opacity">
                            <img src={assets.img2} alt="Google Play" className="h-full w-full object-contain" />
                        </button>
                    </div>
                </div>

                {/* Far Right QR Code - Hidden on mobile, visible on lg */}
                <div className="hidden lg:flex flex-col gap-4 items-center z-10 mr-12">
                    <div className="w-[180px] h-[180px] bg-white/10 rounded-xl p-2 backdrop-blur-sm">
                        <img src={assets.imgQrCodeForMobileEnglishWikipedia1} className="w-full h-full object-contain invert" alt="QR Code" />
                    </div>
                    <p className="text-[16px] text-white text-center">
                        Scan to download FastTV
                    </p>
                </div>
            </div>
        </section>
    );
}
