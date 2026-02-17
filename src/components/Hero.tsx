import { motion } from 'framer-motion';
import { assets } from '../assets/figma_assets';
import HeroPhoneCarousel from './HeroPhoneCarousel';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[900px] w-full overflow-hidden bg-[#040406]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full">
                <img src={assets.imgBg} alt="Background" className="w-full h-full object-cover opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mt-40">
                    {/* Left Column: Text Content */}
                    <motion.div
                        className="flex flex-col gap-6 pb-20"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-[72px] font-bold text-white leading-tight">
                            Stories That Stay <br />
                            With You In <span className="text-[#009cdb]">Just</span>
                            <br />
                            <span className="text-[#009cdb]">90 Seconds</span>
                        </h1>
                        <p className="text-[24px] text-white/80 max-w-[600px] leading-normal tracking-[0.48px]">
                            90 seconds. Real emotions. Premium micro dramas from Hungama — crafted with care, made for you.
                        </p>

                        <div className="flex flex-col gap-2 mt-10">
                            <p className="text-white text-lg font-medium">Download FastTV App</p>
                            <div className="flex gap-4">
                                <button className="h-[50px] w-[160px] hover:opacity-90 transition-opacity">
                                    <img src={assets.img1} alt="App Store" className="h-full w-full object-contain" />
                                </button>
                                <button className="h-[50px] w-[160px] hover:opacity-90 transition-opacity">
                                    <img src={assets.img2} alt="Google Play" className="h-full w-full object-contain" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Phone Mockup & Carousel */}
                    <div className="hidden lg:flex items-center justify-center gap-8 relative h-[700px]">
                        <HeroPhoneCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
}
