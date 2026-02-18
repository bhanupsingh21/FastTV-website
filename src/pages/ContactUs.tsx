import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Mail, Phone, ChevronDown } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { assets } from '../assets/figma_assets';

export default function ContactUs() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How does FastTV work?",
            answer: "FastTV lets you watch short, high-impact drama episodes designed for quick viewing. Download the app, choose a series, and start watching instantly."
        },
        {
            question: "How can I download the FastTV app?",
            answer: "You can download the FastTV app from the Apple App Store for iOS devices and the Google Play Store for Android devices."
        },
        {
            question: "What makes FastTV different?",
            answer: "FastTV specializes in vertical, short-form storytelling that perfectly fits your mobile lifestyle, offering premium production value in bite-sized episodes."
        },
        {
            question: "What plans are available on FastTV?",
            answer: "We offer flexible subscription plans including weekly, monthly, and annual options. Check the app for the latest pricing and offers."
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none -z-10">
                <img
                    src={assets.imgPoster4CopyHor1}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60 mask-image-b-fade"
                    style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#040406]/20 via-[#040406]/60 to-[#040406]" />
            </div>

            {/* Contact Form Section */}
            <section className="container mx-auto px-6 relative mb-32 z-10">
                {/* Center Title */}
                <ScrollAnimation>
                    <h2 className="text-4xl md:text-[64px] font-bold text-center mb-16 tracking-tight leading-none">We’re Here to Help</h2>
                </ScrollAnimation>

                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
                    {/* Left: Contact Info */}
                    <div className="lg:w-[400px] flex flex-col gap-10 pt-4">
                        <ScrollAnimation delay={0.1}>
                            <div className="flex gap-5 items-start">
                                <Mail className="text-[#009cdb] shrink-0 mt-1" size={32} />
                                <div>
                                    <p className="text-white/50 text-xs mb-1 uppercase tracking-wider font-semibold">Email</p>
                                    <a href="mailto:support@fasttv.app" className="block text-xl font-medium hover:text-[#009cdb] transition-colors mb-1">support@fasttv.app</a>
                                    <p className="text-white/50 text-xs mt-3 mb-1 uppercase tracking-wider font-semibold">Email</p>
                                    <a href="mailto:partnerships@fasttv.app" className="block text-xl font-medium hover:text-[#009cdb] transition-colors">partnerships@fasttv.app</a>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={0.2}>
                            <div className="flex gap-5 items-start">
                                <Phone className="text-[#009cdb] shrink-0 mt-1" size={32} />
                                <div>
                                    <p className="text-white/50 text-xs mb-1 uppercase tracking-wider font-semibold">Phone Number</p>
                                    <p className="text-xl font-medium">+44 07466 331893</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-[600px] w-full">
                        <ScrollAnimation delay={0.3}>
                            <form className="space-y-4">
                                <div className="bg-[#18181a] rounded-[10px] px-5 py-3 border border-transparent focus-within:border-white/20 transition-all">
                                    <label className="block text-[11px] text-white/40 mb-1">Name</label>
                                    <input type="text" className="w-full bg-transparent border-none outline-none text-white text-base placeholder-transparent" />
                                </div>
                                <div className="bg-[#18181a] rounded-[10px] px-5 py-3 border border-transparent focus-within:border-white/20 transition-all">
                                    <label className="block text-[11px] text-white/40 mb-1">Email</label>
                                    <input type="email" className="w-full bg-transparent border-none outline-none text-white text-base placeholder-transparent" />
                                </div>

                                <div className="flex bg-[#18181a] rounded-[10px] border border-transparent focus-within:border-white/20 transition-all overflow-hidden">
                                    <div className="px-4 py-3 bg-[#252527] flex items-center gap-2 cursor-pointer border-r border-white/5 min-w-[100px] justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">🇮🇳</span>
                                            <span className="text-white text-sm font-medium">+91</span>
                                        </div>
                                        <ChevronDown size={14} className="text-white/50" />
                                    </div>
                                    <div className="flex-1 px-5 py-3">
                                        <input type="tel" className="w-full bg-transparent border-none outline-none text-white text-base placeholder-white/30" placeholder="91310 74348" />
                                    </div>
                                </div>

                                <div className="bg-[#18181a] rounded-[10px] px-5 py-3 border border-transparent focus-within:border-white/20 transition-all h-[140px]">
                                    <label className="block text-[11px] text-white/40 mb-1">Message</label>
                                    <textarea className="w-full h-full bg-transparent border-none outline-none text-white text-base placeholder-transparent resize-none p-0" />
                                </div>

                                <button type="submit" className="w-full bg-white text-black font-bold text-sm py-4 rounded-[10px] hover:bg-gray-100 transition-all mt-4">
                                    Send Message
                                </button>
                            </form>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 pt-20 border-t border-white/5">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative max-w-6xl mx-auto">
                    {/* Background Elements - Blue Glow */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#009cdb]/30 blur-[120px] rounded-full" />
                    </div>
                    {/* Left: Header */}
                    <div className="lg:w-1/3">
                        <ScrollAnimation>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Got questions? We have the answers
                            </h2>
                            <p className="text-base text-white/60 leading-relaxed">
                                FastTV is all about quick, addictive short-drama series. Here are answers to the most common questions to help you get started.
                            </p>
                        </ScrollAnimation>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:w-2/3 space-y-0">
                        {faqs.map((faq, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div
                                    className="border-b border-white/10 py-6 cursor-pointer group first:border-t"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-medium text-white group-hover:text-[#009cdb] transition-colors pr-8">
                                            {faq.question}
                                        </h3>
                                        <div className="shrink-0">
                                            {openFaq === index ? (
                                                <Minus size={20} className="text-white" />
                                            ) : (
                                                <Plus size={20} className="text-white" />
                                            )}
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/60 pt-4 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
